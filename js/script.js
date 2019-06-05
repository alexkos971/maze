setTimeout(function() {
  var preloader = document.getElementById("preloader").style.display = "none";
  }, 2000);


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


function set() {
  var set = document.getElementById("set"); 
  var theme = document.getElementById("tumbler");
  var box = document.getElementById("box"),   
      desk = document.getElementById("desk-page");
  
  var dark = document.getElementById("dark"),
      dark2 = document.getElementById("dark2");

  if (set.checked) {
    
    theme.style.left = 25 + "px";   
    body.style.background = "#000";
    box.style.background = "#282828";
    desk.style.background = "#282828";; 
  }
  else {

    theme.style.left = 10 + "px";
    body.style.background = "#eaeaea";
    box.style.background = "#fff";
    desk.style.background = "#fff";
  }
}

