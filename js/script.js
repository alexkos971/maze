alert("hello world");

document.getElementByClassName('dot').onclick = current;
var right = 0;
var timer;


  function autoslider () {
    timer = setTimeout(right, 1000);
  }

  function current() {
      var right = document.getElementById('slider');
      right.style.right = 300+"px";
  }

 	function() {		
	  	console.log("hello");
	}


	

  