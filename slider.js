jQuery(document).ready(function() {
      var typed = new Typed("#words", {
        strings: ["hello - world"],
        typeSpeed: 100,
        backSpeed: 40
      });

      $('#check-menu').on('click', function(){
        $('.nav-mob').toggleClass('menu-active');
        $('.menu-active').slideRight(1000);
      });
    });



setTimeout(function() {
  var preloader = document.getElementById("preloader").style.display = "none";
  },3700);


function f1(){
  alert("Thanks for visitings my web-page");
}
