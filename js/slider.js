jQuery(document).ready(function() {
      var typed = new Typed("#words", {
        strings: ["hello - world"],
        typeSpeed: 100,
        backSpeed: 40
      });

      $('#check-menu').on('click', function(){
        $('.nav-mob').toggleClass('menu-active');
        $('.menu-active').slideRight(1000);


      var active = ('#glide');
        active.toggleClass('.active');
      //$('.contant').css('opacity', '.2');
      //$('.container').toggleClass('container-active');
      });
    });



setTimeout(function() {
	var preloader = document.getElementById("preloader").style.display = "none";
	},3700);


function f1(){
	alert("hello world");
}
