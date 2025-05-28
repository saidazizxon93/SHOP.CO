let categoryParent = document.querySelector(".category__list");
let ctitle = document.querySelector(".category__title")
let categoryParams = new URLSearchParams(window.location.search);
let category = categoryParams.get("category");
console.log(category);



// let findCategory = products.find(function (el){
//     return el.category === category;
// })

// console.log(findCategory);

// if (category === "Casual") {
// }
let findCategory = products.filter((product) => product.category === category);

function ggggg(arr){
  categoryParent.innerHTML = "";
  arr.forEach(product => {
   categoryParent.insertAdjacentHTML("beforeend", 
    `
    <li class="newproduct__item">
                <div class="newproduct__img"><img src="${product.image}" alt="" class="newproduct__item-img"></div>
                <h3 class="newproduct__item-title">${product.title}</h3>
                 <div class="newproduct__item-stars">
                     ${product.rating}/5
                 </div> 
                 <span style="display: flex; align-items: center; justify-content: space-between;">
                <h3 class="newproduct__price">$${product.price}</h3>
                <a href="./detail.html?id=${product.id}" class="newproduct__item-btn">More</a>
                </span>
              </li>
`
   )

})
}


ggggg(findCategory)



ctitle.innerHTML = category