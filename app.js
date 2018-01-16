/* ScrollReveal */

window.sr = ScrollReveal();//instantiates ScrollReveal

sr.reveal('.sonic', {
  duration: 1000,
  origin:'left',
  distance:'300px',
  viewFactor: 0.2
});

sr.reveal('#CallToAction h1', {
  duration: 2000,
  delay: 500,
  origin:'right',
  distance:'300px',
  viewFactor: 0.2
});

sr.reveal('.flipper-container', {
  duration: 4000,
  delay: 500,
  origin:'top',
  distance:'300px',
  viewFactor: 0.2
});

//Define UI variables
const arrow = document.querySelector('.flipper-container')

//Listen for open click
arrow.addEventListener('click',function(e) {
    console.log(e.target.className);
    if(e.target.className === "front-face"){
        //window.location.reload();
        alert("Hello, I am an alert!");
    }
});

/*$(function() {
  // Smooth Scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});*/
