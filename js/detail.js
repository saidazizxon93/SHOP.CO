let params = new URLSearchParams(window.location.search);
let detail = document.querySelector(".detail__inner");
let id = params.get("id");
console.log(products);

console.log(id);
let findProduct = products.find(function(el){
   
    
    return el.id === Number(id)
})
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


let detailRight = document.querySelector('.detail__right-color');

console.log(detailRight);


findProduct.colors.forEach((el,index)=>{
  console.log(el);
  
  detailRight.insertAdjacentHTML('beforeend', `
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

    `)
})

let stars = document.querySelector("#stars")

for(let i =0; i< findProduct.rating; i++){
  stars.insertAdjacentHTML("afterbegin", 
    `
    <img src="/imgs/Star 1.svg" />
    `
  )
}


let countS = document.querySelector(".detail__plus-text")
let plusS = document.querySelector("#plus");
let minusS = document.querySelector("#minus");


let count = 1;


function upDisplay(){
  countS.textContent = count;
}


function pluss(){
  count++;
  upDisplay()
}

function minus(){
  if (count > 0) {
    count --;
    upDisplay()
  }
}


plusS.addEventListener("click", pluss);
minusS.addEventListener("click", minus)