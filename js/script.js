jQuery(document).ready(function() {
      var typed = new Typed("#words", {
        strings: ["hello - world"],
        typeSpeed: 100,
        backSpeed: 40
      });

 /*$('#check-menu').on('click', function() {
    $('#menu-active').css('display', 'block');
    $('#menu-active').slideRight(1000);
    //$('.head').css("background-color", "#000")
  });*/
});



setTimeout(function() {
  var preloader = document.getElementById("preloader").style.display = "none";
  },3700);


function check() {
  var check = document.getElementById("check-menu");
  var menu = document.getElementById("menu-active");

  if (check.checked) {
    menu.style.display = "block";
  }
  else {
    menu.style.display = "none";
  }
}


window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop; 

  if (scrolled > 250) {
    var popup = document.getElementById('popup');
    popup.style.display = "block";
  }
}


function f1(){
  alert("Thanks for visitings my web-page");
}


function set() {
  var set = document.getElementById("set"); 
  var theme = document.getElementById("tumbler");
  var box = document.getElementById("box"),
      side = document.getElementById("side1"),
      side2 = document.getElementById("side2"),
      side3 = document.getElementById("side3"),
      side4 = document.getElementById("side4"),      
      desk = document.getElementById("desk-page");
  
  var dark = document.getElementById("dark"),
      dark2 = document.getElementById("dark2");

  if (set.checked) {
    
    theme.style.left = 25 + "px";   
    body.style.background = "#000";
    box.style.background = "#282828";
    side.style.background = "#282828";
    side2.style.background = "#282828";
    side3.style.background = "#282828";
    side4.style.background = "#282828";
    desk.style.background = "#282828";
    dark.style.color = "#fff";
    dark2.style.color = "#fff"; 
  }
  else {

    theme.style.left = 10 + "px";
    body.style.background = "#eaeaea";
    box.style.background = "#fff";
    side.style.background = "#fff";
    side2.style.background = "#fff";
    side3.style.background = "#fff";
    side4.style.background = "#fff";
    desk.style.background = "#fff";
    dark.style.color = "#000";
    dark2.style.color = "#000";
  }
}

