"use strict";

function show(dirName) {
  const slide = document.getElementsByClassName("Slidesbackground")[0];
  slide.innerHTML = "";

  // 이거 아이템화하기
  const item = document.createElement("div");
  item.classList = ["mySlide fade"];

  const img = document.createElement("img");
  img.classList = ["slideshow-image"];
  img.src = `./image/${dirName}/1.jpg`;

  item.appendChild(img);
  slide.appendChild(item);
  // --

  // 팝업창 활성화
  document.getElementById("popup").style.display = "";
}

function hide() {
  // 팝업창 비활성화
  document.getElementById("popup").style.display = "none";
}

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex - 1].style.display = "block";

//   setTimeout(showSlides, 2000); // 2초마다 이미지가 체인지됩니다
// }
