let typeParent = document.querySelector(".category__left-types");
let colorParent = document.querySelector(".category__left-color")
let typeFind = products.map((el) => el.type);
let colorFind = products.map((el) => el.colors);

console.log(colorFind);


let colorArray = [];

products.forEach((product) => {
   product.colors.forEach((color) => {
    if(!colorArray.includes(color)){
      colorArray.push(color)
    }
   })
})
console.log(colorArray);

let typeArray = [];

typeFind.forEach((product) => {
  typeFind.forEach((type) => {
    if (!typeArray.includes(type)) {
      typeArray.push(type);
    }
  });
});

function creatInput(parentElement, arr, type) {
  if (type === "radio") {
    arr.forEach((el, index) => {
      parentElement.insertAdjacentHTML(
        "beforeend",
        `
                  <label
                    for="radio-custom${index + 1}"
                    class="category__left-types-label"
                  >
                    <input
                      type="radio"
                      value="${el}"
                      name="radio-custom"
                      id="radio-custom${index + 1}"
                      class="visually-hidden category__left-types-inp"
                    />
                    <span
                      class="category__left-types-spp "
                    >${el}</span>
                  </label>
                `
      );
    });
  }
  if (type === "checkbox"){
        arr.forEach((el, index) => {
      parentElement.insertAdjacentHTML(
        "beforeend",
        `
                  <label for="check-custom${index + 1}" class="cotegory__color-label">
                   <input
                   type="checkbox"
                   value="${el}"
                   name="check-custom"
                   id="check-custom${index + 1}"
                    class="visually-hidden cotegory__color"/>
               <span style="background-color: ${el};" class="cotegory__color-spp"></span>
               </label>
                `
      );
    });
  }
}

creatInput(typeParent, typeArray, "radio");
creatInput(colorParent, colorArray, "checkbox");


// function filterCheck(){
//   let checkValue = [...allCheck].filter((checkbox) => checkbox.checked).map((el) => el.value);

//   let FilterByType = products.filter(product => checkValue.every((mat) => product.))
// }

let allRadio = document.querySelectorAll('input[type="radio"]');

console.log(allRadio);

allRadio.forEach((radio) => {
  radio.addEventListener("click", function () {
    let finddd = products.filter((item) => item.type === radio.value)
    ggggg(finddd);
    console.log(finddd);
  });
});

let allCheck = document.querySelectorAll('input[type="checkbox"]')

function filterCheck(){
  let checkValue = [...allCheck].filter((check) => check.checked).map((el) => el.value);

  let FilterByColor = products.filter((product) => checkValue.every((mat) => product.colors.includes(mat)));

  ggggg([...FilterByColor])
}

[...allCheck].forEach((input) => {
  input.addEventListener("click", filterCheck)
})