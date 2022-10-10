(()=> {

})();


 const popImgUrl = [
  {
    type: "1",
    target: "concept1",
    urlLength: 7,
    urlList: [
      "assets/img/portfolio/concept1/sub1.jpeg",
      "assets/img/portfolio/concept1/sub2.jpeg",
      "assets/img/portfolio/concept1/sub3.jpeg",
      "assets/img/portfolio/concept1/sub4.jpeg",
      "assets/img/portfolio/concept1/sub5.jpeg",
      "assets/img/portfolio/concept1/sub6.jpeg",
      "assets/img/portfolio/concept1/sub7.jpeg",
    ],
  },
  {
    type: "2",
    target: "concept2",
    urlLength: 4,
    urlList: [
      "assets/img/portfolio/concept2/sub1.jpeg",
      "assets/img/portfolio/concept2/sub2.jpeg",
      "assets/img/portfolio/concept2/sub3.jpeg",
      "assets/img/portfolio/concept2/sub4.jpeg",
    ],
  },
  {
    type: "3",
    target: "concept3",
    urlLength: 2,
    urlList: [
      "assets/img/portfolio/concept3/sub1.jpeg",
      "assets/img/portfolio/concept3/sub2.jpeg",
    ],
  },
  {
    type: "4",
    target: "concept4",
    urlLength: 4,
    urlList: [
      "assets/img/portfolio/concept4/sub1.jpeg",
      "assets/img/portfolio/concept4/sub2.jpeg",
      "assets/img/portfolio/concept4/sub3.jpeg",
      "assets/img/portfolio/concept4/sub4.jpeg",
    ],
  },
  {
    type: "5",
    target: "concept5",
    urlLength: 6,
    urlList: [
      "assets/img/portfolio/concept5/sub1.jpeg",
      "assets/img/portfolio/concept5/sub2.jpeg",
      "assets/img/portfolio/concept5/sub3.jpeg",
      "assets/img/portfolio/concept5/sub4.jpeg",
      "assets/img/portfolio/concept5/sub5.jpeg",
      "assets/img/portfolio/concept5/sub6.jpeg",
    ],
  },
  {
    type: "6",
    target: "concept6",
    urlLength: 2,
    urlList: [
      "assets/img/portfolio/concept6/sub1.jpeg",
      "assets/img/portfolio/concept6/sub2.jpeg",
    ],
  },
  {
    type: "7",
    target: "concept7",
    urlLength: 4,
    urlList: [
      "assets/img/portfolio/concept7/sub1.jpeg",
      "assets/img/portfolio/concept7/sub2.jpeg",
      "assets/img/portfolio/concept7/sub3.jpeg",
      "assets/img/portfolio/concept7/sub4.jpeg",
    ],
  },
];


//맵을 좀 걸어주면 될 것 같은데? 언제? 클릭했을 때,

var swiper = new Swiper(".popupImgSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const startSwiper = () => {
    console.log(window.swiper);
  if (window.swiper != null) {
    window.swiper.destroy();
  }

  window.swiper = new Swiper(".popupImgSwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
// }

const popup = document.querySelector(".popup");
// const popupImgOpen = document.querySelector(".popup-img-open");
const popupImgOpenAll = document.querySelectorAll(".popup-img-open");
const popupImgClose = document.querySelector(".popup-img-close");

const openPopupImgHandler = () => {
  popup.style.display = "flex";
  console.log("------");
  startSwiper();
};

const closePopupImgHandler = () => {
  popup.style.display = "none";
    swiper = null;
};

const changePopupImgHandler = (e) => {
  e.preventDefault();
  const dataTarget = e.target.getAttribute("data-target");

  for (let i = 0; popImgUrl.length > i; i++) {
    console.log(popImgUrl[i].target);
    if (dataTarget == popImgUrl[i].target) {
      document.querySelector(".popupImgSwiper .swiper-wrapper").innerHTML =
        popImgUrl[i].urlList
          .map(
            (item, idx) =>
              `<div class="swiper-slide">
                <div class="slide-box">
                  <img
                    class="swiper-img"
                    src=${item}
                  />
                </div>
              </div>`,
          )
          .join("");
    }
  }
};

// popupImgOpen.addEventListener("click", openPopupImgHandler);
// popupImgOpen.addEventListener("click", changePopupImgHandler);

popupImgOpenAll.forEach((popupImgElement) => {
  popupImgElement.addEventListener("click", openPopupImgHandler);
  popupImgElement.addEventListener("click", changePopupImgHandler);
  popupImgElement.addEventListener("click", startSwiper);
});
popupImgClose.addEventListener("click", closePopupImgHandler);

// window.swiper = null;

// console.log(window.swiper);





