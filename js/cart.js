let productParent = document.querySelector(".cart__list");
let cartPrice = document.querySelector(".cart__total-subtotal-price");
let cartTotal = document.querySelector(".cart__total-total-price");

let pp = localStorage.getItem("product");

let ppp = JSON.parse(pp)

// let pppp = []

// pppp.push(ppp)

// console.log(pppp);



productParent.insertAdjacentHTML("beforeend",
            `
    <li class="cart__item">
                    <img src="${ppp.image}" alt="" class="cart__img" />
                    <div class="cart__item-box">
                      <span style="display: flex; align-items: center">
                        <h3 class="cart__item-title">
                          ${ppp.title}
                        </h3>
                        <button class="cart__item-deletbtn">
                          <img src="./imgs/Frame (8).svg" alt="" />
                        </button>
                      </span>
                      <span
                        style="
                          display: flex;
                          align-items: center;
                          gap: 5px;
                          margin-top: 10px;
                        "
                      >
                        <p class="cart__item-size">Size:</p>
                        <p class="cart__item-sizee">Large</p></span
                      >
                      <span
                        style="
                          display: flex;
                          align-items: center;
                          gap: 5px;
                          margin-top: 10px;
                          margin-bottom: 20px;
                        "
                      >
                        <p class="cart__item-color">Color:</p>
                        <p class="cart__item-colorr">White</p>
                      </span>

                      <span style="display: flex; align-items: center">
                        <h3 class="cart__item-price">$${ppp.price}</h3>
                        <!-- <span class="detail__plus-span">
                        <button id="minus" class="detail__plus-btn">-</button>
                        <h4 class="detail__plus-text">1</h4>

                        <button id="plus" class="detail__plus-btn">+</button>
                      </span> -->
                      </span>
                    </div>
                  </li>
   `  
        );



// function renderProduct(arr){
//     arr.forEach(element => {
        

//     });
// }


// renderProduct(localArray)

cartPrice.innerHTML = `$ ${ppp.price}`;        


let count = ppp.price;

 cartTotal.innerHTML = `$ ${count}`


 console.log(ppp.img);
 

let delet = document.querySelector(".cart__item-deletbtn")

delet.addEventListener("click", function(){
  localStorage.removeItem("product")
})