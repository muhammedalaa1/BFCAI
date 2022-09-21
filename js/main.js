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
