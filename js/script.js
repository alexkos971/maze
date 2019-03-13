jQuery(document).ready(function() {
      var typed = new Typed("#words", {
        strings: ["hello - world"],
        typeSpeed: 100,
        backSpeed: 40
      });

  /*$('#check-menu').on('click', function() {
    $('.page-menu').toggleClass('main-menu');
    $('.main-menu').slideRight(1000);
    //$('.head').css("background-color", "#000")
  });*/
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
  var box = document.getElementById("box");
  var side = {
    sider: "Included dark theme"
  };
  
  var bamm = document.getElementById("bamm");

  if (set.checked) {
    theme.style.left = 25 + "px";   
    body.style.background = "#000";
    box.style.background = "#282828";
    bamm.style.color = "#fff";
    //alert(side.sider);
  }
  else {
    theme.style.left = 10 + "px";
    body.style.background = "#eaeaea";
    box.style.background = "#fff";
    bamm.style.color = "#000";
  }
}

