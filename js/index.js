let removeHeader = document.querySelector(".header__top-remove-btn");
let headerTop = document.querySelector(".header__top");
let headerBurbtn = document.querySelector(".header__bottom-burbtn");
let headerList = document.querySelector(".header__bottom-list");
let headerSerchBlock = document.querySelector(".header__serchbtn");
let headerInp = document.querySelector(".header__bottom-inp");
let newList = document.querySelector(".newproduct__list");
let topList = document.querySelector(".tops__list");
let retingss = products.map((el) => el.rating);

removeHeader.addEventListener("click", function () {
  headerTop.remove();
});

headerBurbtn.addEventListener("click", function () {
  headerList.classList.toggle("header__list-block");
});

headerSerchBlock.addEventListener("click", function () {
  headerInp.classList.toggle("header__bottom-inp-block");
});

let menu = document.querySelector(".reviews__list");

function scrollLeft() {
  menu.scrollBy({ right: 200, behavior: "smooth" });
}

function scrollRight() {
  menu.scrollBy({ left: 400, behavior: "smooth" });
}

let newsArray = products.slice(0, 4);

function newDisplay(array) {
  newList.innerHTML = "";
  array.forEach((element) => {
    newList.insertAdjacentHTML(
      "beforeend",
      `
            <li class="newproduct__item">
                <div class="newproduct__img"><img src="${element.image}" alt="" class="newproduct__item-img"></div>
                <h3 class="newproduct__item-title">${element.title}</h3>
                 <div class="newproduct__item-stars">
                     ${element.rating}/5
                 </div> 
                 <span style="display: flex; align-items: center; justify-content: space-between;">
                <h3 class="newproduct__price">$${element.price}</h3>
                <a href="./detail.html?id=${element.id}" class="newproduct__item-btn">More</a>
                </span>
              </li>
            `
    );
  });
}

newDisplay(newsArray);

let topSelling = products.sort((a, b) => b.seling - a.seling).slice(0, 4);

function topDisplay(array) {
  topList.innerHTML = "";
  array.forEach((element) => {
    topList.insertAdjacentHTML(
      "beforeend",
      `
            <li class="newproduct__item">
                <div class="newproduct__img"><img src="${element.image}" alt="" class="newproduct__item-img"></div>
                <h3 class="newproduct__item-title">${element.title}</h3>
                 <div class="newproduct__item-stars">
                     ${element.rating}/5
                 </div> 
                <span style="display: flex; align-items: center; justify-content: space-between;">
                <h3 class="newproduct__price">$${element.price}</h3>
                <a href="./detail.html?id=${element.id}" class="newproduct__item-btn">More</a>
                </span>

              </li>
            `
    );
  });
}

topDisplay(topSelling);
