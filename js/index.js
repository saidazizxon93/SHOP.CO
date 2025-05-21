let removeHeader = document.querySelector(".header__top-remove-btn");
let headerTop = document.querySelector(".header__top");
let headerBurbtn = document.querySelector(".header__bottom-burbtn");
let headerList = document.querySelector(".header__bottom-list")
let headerSerchBlock = document.querySelector(".header__serchbtn");
let headerInp = document.querySelector(".header__bottom-inp");

removeHeader.addEventListener("click", function(){
    headerTop.remove()
})

headerBurbtn.addEventListener("click", function(){
    headerList.classList.toggle("header__list-block");
})

headerSerchBlock.addEventListener("click", function(){
    headerInp.classList.toggle("header__bottom-inp-block")
})
