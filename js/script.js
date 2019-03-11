jQuery(document).ready(function() {
      var typed = new Typed("#words", {
        strings: ["hello - world"],
        typeSpeed: 100,
        backSpeed: 40
      });

      $('#check-menu').on('click', function() {
        $('#nav-mob').toggleClass('menu-active');
        
      });
    });



setTimeout(function() {
  var preloader = document.getElementById("preloader").style.display = "none";
  },3700);

function check() {
  var check = document.getElementById("check-menu");
  var first = document.getElementById("nav-mob");
    first.classList.remove("menu-active");
    
    if (check.checked) {
      first.classList.add("menu-active");
    }
}


function f1(){
  alert("Thanks for visitings my web-page");
}
