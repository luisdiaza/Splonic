/* ScrollReveal */

// window.sr = ScrollReveal();//instantiates ScrollReveal
//
// sr.reveal('.sonic', {
//   duration: 1000,
//   origin:'left',
//   distance:'300px',
//   viewFactor: 0.2
// });
//
// sr.reveal('#CallToAction h1', {
//   duration: 2000,
//   delay: 500,
//   origin:'right',
//   distance:'300px',
//   viewFactor: 0.2
// });
//
// sr.reveal('.flipper-container', {
//   duration: 4000,
//   delay: 500,
//   origin:'top',
//   distance:'300px',
//   viewFactor: 0.2
// });

//Define UI variables
const unorderedList = document.querySelector('.unorderedList');
const callToAction = document.querySelector('.CallToAction');
const entertainment = document.querySelector('.entertainment');
const artistes = document.querySelector('.art');
const arrow = document.querySelector('.flipper-container');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.closeBtn');


/* Event Handlers*/

// Scroll to CallToAction section when RSVP is clicked in nav bar
unorderedList.addEventListener('click', function(e){
    if(e.target.className === 'rsvp') {
        callToAction.scrollIntoView({behavior: "smooth"});
    }
});

// Scroll to entertainment section when entertainment section is clicked in nav bar
unorderedList.addEventListener('click', function(e){
    if(e.target.className === 'performers') {
        entertainment.scrollIntoView({behavior: "smooth"});
    }
});

// Scroll to art section when artists is clicked in nav bar
unorderedList.addEventListener('click', function(e){
    if(e.target.className === 'artistes') {
        artistes.scrollIntoView({behavior: "smooth"});
    }
});

//Opens modal when RSVP button is clicked
arrow.addEventListener('click',function(e) {
    // console.log(e.target.className);
    if(e.target.className === "front-face") {
        //window.location.reload();
        // alert("Hello, I am an alert!");
        modal.style.display = 'block'; //opens modal
    }
});

closeBtn.addEventListener('click', function (e) { // closes modal when "x" is pressed in modal
    modal.style.display = 'none';
});

window.addEventListener('click', function (e) {
    if(e.target === modal) {
        modal.style.display = 'none';
    }
});
