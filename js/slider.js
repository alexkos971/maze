setTimeout(function() {
	var preloader = document.getElementById("preloader").style.display = "none";
	},11000);


function f1(){
	alert("hello world");
}


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides-fade");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

/*function check() {
  
  var nav = document.getElementsByClassName("nav-mob");
  var arr = [0,1];

    style = nav[0].style;
    style.right = 0 + "px";
    
/*style = nav[0].style;
        style.display = "inline-block";*/
    

    /*var nav = document.getElementsByClassName("nav").value;
    nav.styleSheet.display = "inline-block";*/

//}