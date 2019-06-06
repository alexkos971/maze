setTimeout(function() {
  var preloader = document.getElementById("preloader").style.display = "none";
  }, 2000);


function check() {
  var check = document.getElementById("check-menu");
  var menu = document.getElementById("menu-active");
  var theme = document.getElementById("theme");

  if (check.checked) {
    menu.style.display = "block";
    menu.appendChild(theme);
    theme.style.display = "block";
  }
  else {
    menu.style.display = "none";
  }
}


function set(href) {
  var set = document.getElementById("set"); 
  var theme = document.getElementById("tumbler");
  var basicly = document.createElement("link");
  basicly.rel = "stylesheet";
  basicly.href = "dark.css";
  basicly.id = "delete";

  if (set.checked) {  
    theme.style.left = 25 + "px";
    document.head.appendChild(basicly);   
  }
  else {
    theme.style.left = 10 + "px";
      document.getElementById("delete").remove();
  }
}

