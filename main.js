"use strict";

const data = {
  box: 1,
  lying: 3,
  nosnowwinter: 2,
  rolling: 5,
  snake: 4,
  sun: 5,
  water: 3,
  winter: 4,
  yawning: 2,
};

let slideInterval = 0;

function show(dirName) {
  // 로그 출력
  const imageTotalNumber = data[dirName];
  console.log(
    `User clicked: '${dirName}', total number of images: ${imageTotalNumber}`
  );

  // 슬라이드 이미지 초기화 및 채우기
  const slide = document.getElementsByClassName("Slidesbackground")[0];
  slide.innerHTML = "";

  for (let i = 0; i < imageTotalNumber; i++) {
    const item = document.createElement("div");
    item.classList = ["mySlide fade"];

    const img = document.createElement("img");
    img.classList = ["slideshow-image"];
    img.src = `./image/${dirName}/${i + 1}.jpg`;

    item.appendChild(img);
    slide.appendChild(item);
  }

  // 슬라이드 시작
  let slides = document.getElementsByClassName("mySlide");
  for (let i = 1; i < slides.length; i++) slides[i].style.display = "none";
  console.log(`현재 슬라이드: 1 / ${imageTotalNumber}`);

  let slideNum = 0;
  slideInterval = setInterval(() => {
    slides[slideNum].style.display = "none";

    slideNum++;
    slideNum =
      ((slideNum % imageTotalNumber) + imageTotalNumber) % imageTotalNumber; // 항상 0~imageTotalNumber 유지
    console.log(`현재 슬라이드: ${slideNum + 1} / ${imageTotalNumber}`);

    slides[slideNum].style.display = "block";
  }, 3000); // 일정 시간(ms)마다 변경

  // 팝업창 활성화
  document.getElementById("popup").style.display = "";
}

function hide() {
  clearInterval(slideInterval);
  // 팝업창 비활성화
  document.getElementById("popup").style.display = "none";
}
