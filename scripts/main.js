// Set my title in JS
const myHeading = document.querySelector("h1");
myHeading.textContent = "My Digital Garden";

// Change image on click
const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/base/retrowave-palmtree.svg") {
    myImage.setAttribute("src", "images/base/retrowave-palmtree-alt.svg");
  } else {
    myImage.setAttribute("src", "images/base/retrowave-palmtree.svg");
  }
};

// Change title using a button
let myButton = document.querySelector("button");
function setTitle() {
  const myTitle = prompt("Please enter a new title.");
  if (!myTitle) setTitle();
  localStorage.setItem("title", myTitle);
  myHeading.textContent = `${myTitle}`;
}
if (localStorage.getItem("title")) {
  const storedTitle = localStorage.getItem("title");
  myHeading.textContent = `${storedTitle}`;
}
myButton.onclick = () => {
  setTitle();
};
