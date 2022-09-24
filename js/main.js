const texts = ["Welcome in our site", "BFCAI", "Let's Study !"];
    let counter = 0;
    let index = 0;
    let text = "";
    let size = "";
(function type() {
    
  if (counter === text.length) {
    counter = 0;
  }
    text = texts[counter];
    size = text.slice(0, index++);
    document.querySelector(".TypeWrite").textContent = size;
    if (size === text.length) {
      counter++;
      index = 0;
      
    }
    
    setTimeout(type, 100);
    
})();

let arrow = document.getElementById("goupp")
let circle =document.getElementById("goup")
window.onscroll = function (){
  'use strict';
  if(window.pageYOffset >= 280){
    arrow.style.display="block";
    circle.style.display="block";
  }else{
    arrow.style.display = "none";
    circle.style.display="none";
  }
}
circle.onclick = function () {
'use strict';
window.scrollTo(0,0);
}

