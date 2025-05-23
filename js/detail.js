let params = new URLSearchParams(window.location.search);
let detail = document.querySelector(".detail__inner");
let id = params.get("id");
console.log(products);

console.log(id);
let findProduct = products.find(function (el) {
  return el.id === Number(id);
});
console.log(findProduct);

detail.innerHTML = `
 <div class="detail__left">
                <img src="${findProduct.image}" alt="" class="detail__img"/>
              </div>

              <div class="detail__right">
                <div class="detail__right-top">
                  <h2 class="detail__title">${findProduct.title}</h2>

                  <span id="stars">${findProduct.rating}/5</span>

                  <h3 class="detail__price">$${findProduct.price}</h3>

                  <p class="detail__text">
                    ${findProduct.about}
                  </p>
                </div>

                <div class="detail__right-colors">
                  <p class="detail__right-colors-text">Select Colors</p>

                  <div class="detail__right-color">
                   
                  </div>
                </div>

                <div class="detail__right-size">
                  <p class="detail__right-size-text">Choose Size</p>

                  <ul class="detail__size-list">
                    <li class="detail__size-item">
                      <button class="detail__size-item-btn">
                        Small
                      </button>
                    </li>
                    <li class="detail__size-item">
                      <button class="detail__size-item-btn">
                        Medium  
                      </button>
                    </li>
                    <li class="detail__size-item">
                      <button class="detail__size-item-btn">
                        Large
                      </button>
                    </li>
                    <li class="detail__size-item">
                      <button class="detail__size-item-btn">
                        X-Large
                      </button>
                    </li>
                  </ul>
                </div>

                <div class="detail__right-and">
                  <span class="detail__plus-span">
                    <button id="minus" class="detail__plus-btn">-</button>
                    <h4 class="detail__plus-text">1</h4>

                    <button id="plus" class="detail__plus-btn">+</button>
                  </span>

                  <button class="detail__right-and-btn">Add to Cart</button>
                </div>
              </div>
`;

let detailRight = document.querySelector(".detail__right-color");

console.log(detailRight);

findProduct.colors.forEach((el, index) => {
  console.log(el);

  detailRight.insertAdjacentHTML(
    "beforeend",
    `
        <label
            for="detail-radio-custom${index + 1}"
            class="detail__color-label"
          >
            <input
            value="${el}"
              type="radio"
              name="-radio-custom"
              id="detail-radio-custom${index + 1}"
              class="visually-hidden detail__color"
            />
            <span style="background-color: ${el};" class="detail__color-spp detail-spp1"></span>
          </label>

    `
  );
});

let stars = document.querySelector("#stars");

for (let i = 0; i < findProduct.rating; i++) {
  stars.insertAdjacentHTML(
    "afterbegin",
    `
    <img src="/imgs/Star 1.svg" />
    `
  );
}

let countS = document.querySelector(".detail__plus-text");
let plusS = document.querySelector("#plus");
let minusS = document.querySelector("#minus");

let count = 1;

function upDisplay() {
  countS.textContent = count;
}

function pluss() {
  count++;
  upDisplay();
}

function minus() {
  if (count > 0) {
    count--;
    upDisplay();
  }
}

plusS.addEventListener("click", pluss);
minusS.addEventListener("click", minus);

let comentParent = document.querySelector(".coments__list");

findProduct.comments.forEach((el) => {
  comentParent.insertAdjacentHTML(
    "beforeend",
    `
  <li class="coments__item">
                  <span class="coments__item-reting"></span>
                  <span class="coments__item-span">
                    <h4 class="coments__item-title">
                      ${el.user}
                  
                    </h4>
                        <img
                        width="24px"
                        height="24px"
                        src="./imgs/Vector (2).svg"
                        alt=""
                        class="coments__item-title-img"
                      />
                  </span>
                  <p class="coments__item-text">
                    ${el.comment}
                  </p>

                  <p class="coments__item-date">${el.posted}</p> 
                </li>
    `
  );
});

// let comentReting = document.querySelector(".coments__item-reting");

// findProduct.comments.forEach((el) => {
//   for (let i = 1; i < el.userRate; i++) {
//     comentReting.insertAdjacentHTML(
//       "beforeend",
//       `
//        <img class="coments__item-title-img2" width="127px" height="22px" src="./imgs/Star 1.svg" alt="">

//     `
//     );
//   }
// });


let looklikeParent = document.querySelector(".looklike__list");
let newsArray = products.slice(0, 4);


newsArray.forEach((el) => {
  if(el.id === Number(id)) return;
  looklikeParent.insertAdjacentHTML("beforeend", `
     <li class="newproduct__item">
                <div class="newproduct__img"><img src="${el.image}" alt="" class="newproduct__item-img"></div>
                <h3 class="newproduct__item-title">${el.title}</h3>
                 <div class="newproduct__item-stars">
                     ${el.rating}/5
                 </div> 
                 <span style="display: flex; align-items: center; justify-content: space-between;">
                <h3 class="newproduct__price">$${el.price}</h3>
                <a href="./detail.html?id=${el.id}" class="newproduct__item-btn">More</a>
                </span>
              </li>
    `)
})