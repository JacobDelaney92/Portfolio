/*

// Sliding tracker already set to false
var sliding;
var pos = -95;
document.getElementById("divSlider").addEventListener("mouseenter",function checkHover() {
  console.log('hello there');
  sliding = true;
  var elm = document.getElementById('divSlider');
     pos = -95;
    var id = setInterval(frame, 10);
    function frame(){
      if (sliding != false) {
        if(pos == 0 || sliding == false){
          clearInterval(id);
        }else{
          pos++;
          elm.style.bottom = pos + 'px';
          //elm.style.left = pos + 'px';
        }
      }
    }

  });

document.getElementById("divSlider").addEventListener("mouseleave",function checkLeave() {
    console.log('goodbye');
      sliding = false;
    var elm = document.getElementById('divSlider');
      pos ;
      var id = setInterval(frame, 10);
      function frame(){
        if (sliding == false) {
        if(pos == -95 || sliding == true ){
          clearInterval(id);
         //sliding = true;
        }else{
          pos--;
          elm.style.bottom = pos + 'px';
          //elm.style.left = pos + 'px';
        }
      }//else if(pos !== -95 ){}
   }
    });

// expanding a div on it's width and height*/


var toggle = document.querySelector('.nav-toggle');

toggle.addEventListener('click', function(e) {
  if(menuToggle.classList.contains('opened')){
    Smooth.collapse('popUp');
  }else{
    Smooth.expand('popUp');
  }
    this.classList.toggle('opened');
});



var Smooth = {
    init: function(id) {
        var el = document.getElementById(id);
        if (!el.hasAttribute('data-height')) {
            el.style.display = 'block';
            el.dataset.height = el.offsetHeight + "px";
            el.className = 'smooth';
            el.style.height = 0;
            console.log(el.style);
        }
        return el;
        console.log(el);
    },
    expand: function(id) {
        var div = Smooth.init(id);
        setTimeout(function() {
        div.style.height = div.dataset.height; }, 5);
    },
    collapse: function(id) {
        var div = Smooth.init(id);
        div.style.height = 0;
    }
}




// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
document.getElementById("myBtn").addEventListener("click",function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
