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

/* Modal */

// Get the modal
var modal;

// Get the button that opens the modal
var btn;

// Get the <span> element that closes the modal
var span;

// When the user clicks on the button, open the modal
window.onload = function(){
  btn = document.querySelector("#hack");
  modal = document.getElementById("myModal");
  span = document.getElementsByClassName("close")[0];
  // btn.onclick = function() {
  //   modal.style.display = "block";
  // }
  btn.addEventListener("click",function(e){
    console.log(e,"clicked");
    modal.style.display = "block";
  });
  span.onclick = function() {
    modal.style.display = "none";// When the user clicks on <span> (x), close the modal
  }
  window.onclick = function(event) {// When the user clicks anywhere outside of the modal, close it
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

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
