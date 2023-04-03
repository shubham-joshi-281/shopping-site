//Hemburger Menu
const menu = document.getElementById("nav");
function show() {
  menu.classList.toggle("show");
}

// TOP SCROLL
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behaviour: "smooth",
  });
}

// SHOP PRODUCT
const bigImg = document.getElementById("big-img");
const smallImg = document.getElementsByTagName("img");
smallImg[0].onclick = function () {
  bigImg.src = smallImg[0].src;
};
smallImg[1].onclick = function () {
  bigImg.src = smallImg[1].src;
};
smallImg[2].onclick = function () {
  bigImg.src = smallImg[2].src;
};
smallImg[3].onclick = function () {
  bigImg.src = smallImg[3].src;
};
smallImg[4].onclick = function () {
  bigImg.src = smallImg[4].src;
};

// PAGINATION CODE
function box1() {
  document.getElementById("box1").style.display = "flex";
  document.getElementById("box2").style.display = "none";
  document.getElementById("box3").style.display = "none";
  document.getElementById("box4").style.display = "none";
  document.getElementById("box5").style.display = "none";
}

function box2() {
  document.getElementById("box1").style.display = "none";
  document.getElementById("box2").style.display = "flex";
  document.getElementById("box3").style.display = "none";
  document.getElementById("box4").style.display = "none";
  document.getElementById("box5").style.display = "none";
}

function box3() {
  document.getElementById("box1").style.display = "none";
  document.getElementById("box2").style.display = "none";
  document.getElementById("box3").style.display = "flex";
  document.getElementById("box4").style.display = "none";
  document.getElementById("box5").style.display = "none";
}

function box4() {
  document.getElementById("box1").style.display = "none";
  document.getElementById("box2").style.display = "none";
  document.getElementById("box3").style.display = "none";
  document.getElementById("box4").style.display = "flex";
  document.getElementById("box5").style.display = "none";
}
function box5() {
  document.getElementById("box1").style.display = "none";
  document.getElementById("box2").style.display = "none";
  document.getElementById("box3").style.display = "none";
  document.getElementById("box4").style.display = "none";
  document.getElementById("box5").style.display = "flex";
}
