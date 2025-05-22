
let colors = products.map((el) => el.colors);

// let colorsArray = [];

// products.forEach((product) => {
//     product.colors.forEach((colors) => {
//         if(!colorsArray.includes(colors)){
//             colorsArray.push(colors)
//         }
//     })
// })

// function creareInput(parentElement, arr, type) {
//   if (type === "radio") {
//     arr.forEach((el) => {
//       parentElement.insertAdjacentHTML(
//         "beforeend",
//         `
//                  <label
//                       for="detail-radio-custom${index + 1}"
//                       class="detail__color-label"
//                     >
//                       <input
//                       value="${el}"
//                         type="radio"
//                         name="-radio-custom"
//                         id="detail-radio-custom${index + 1}"
//                         class="visually-hidden detail__color"
//                       />
//                       <span style="background-color: ${el};" class="detail__color-spp detail-spp1"></span>
//                     </label>
//                 `
//       );
//     });
//   }
// }

// creareInput(parent, products, "radio");
