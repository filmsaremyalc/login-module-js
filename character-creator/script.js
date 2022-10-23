const costumes = [
  "costume-1",
  "costume-2",
  "costume-3",
  "costume-4",
  "costume-5",
  "costume-6",
  "costume-7",
];
const rightBtn = document.querySelector(".right-btn");
const leftBtn = document.querySelector(".left-btn");
let costumeForm = document.querySelector(".costume-input");
let previewIMG = document.querySelector(".costume-1");
let currentImage = 0;

rightBtn.addEventListener("click", function () {
  previewIMG.removeAttribute("class");
  costumeForm.removeAttribute("value");
  currentImage += 1;

  if (currentImage >= costumes.length) {
    currentImage = 0;
  }

  previewIMG.classList.add(costumes[currentImage]);
  costumeForm.value = costumes[currentImage];
});

leftBtn.addEventListener("click", function () {
  previewIMG.removeAttribute("class");
  costumeForm.removeAttribute("value");

  currentImage -= 1;

  if (currentImage < 0) {
    currentImage = 6;
  }

  previewIMG.classList.add(costumes[currentImage]);
  costumeForm.value = costumes[currentImage];
});

const formIMG = document.querySelector(".");

// var nodes = document.querySelectorAll('.message');
// var last = nodes[nodes.length- 1];
// document.querySelector('#content').value =last.innerHTML;
