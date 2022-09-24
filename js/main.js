const textDisplay = document.querySelector(".TypeWrite");
let phrases = [""];
const title = document.querySelector("title");
let i = 0;
let j = 0;
let currentPhrase = ["W"];
let isDeleting = false;
let isEnd = false;
let counter = 0;

function loop() {
  if (counter === 2) {
    return;
  }
  isEnd = false;
  textDisplay.innerHTML = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      textDisplay.innerHTML = currentPhrase.join("");
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
      textDisplay.innerHTML = currentPhrase.join("");
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
      counter++;
    }

    if (isDeleting && j === 0) {
      if (counter == 1) {
        currentPhrase = [""];
      } else {
        currentPhrase = ["W"];
      }
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }
  const spedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (300 - 290) +200;
  const time = isEnd ? 400 : isDeleting ? spedUp : normalSpeed;
  setTimeout(loop, time);
}
if (title.innerText === "BFCAI") {
  phrases=["elcome In our site", "Welcome To BFCAI"];
  loop();
}
else {
  phrases = [title.innerText];
  counter++;
  currentPhrase = [""];
  loop();
}
