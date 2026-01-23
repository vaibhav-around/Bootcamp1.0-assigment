const searchBox = document.querySelector(".search-box");
const searchInputBox = document.getElementById("search-box");
const moneyType = ["USD","EUR","GBP","JPY","CNY","INR","AUD","CAD","CHF","SEK","NOK","DKK","NZD","SGD","HKD","KRW","THB","MYR","IDR","PHP","VND","PKR","BDT","LKR","AED","SAR","ZAR","BRL","MXN","TRY"];

searchBox.addEventListener("click", (e) => {
    if(!(searchInputBox.focus())){
        searchInputBox.focus();
        searchBox.classList.toggle("search-box-active");
    }
})


document.addEventListener('click', (event) => {
    const isClickInsideSearchBox = searchBox.contains(event.target);
    
    if(!isClickInsideSearchBox){
        searchBox.classList.remove("search-box-active");

    }
})


// navigation icon system

const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    if(hamburger.classList.contains("ri-menu-line")){
        hamburger.classList.replace("ri-close-line","ri-menu-line");
    }else {
        hamburger.classList.replace("ri-menu-line","ri-close-line");
    }
})


var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 20,
      loop:true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        800: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        0: {
            slidesPerView: 2,
            spaceBetween: 20
        }
      }
    });


var appendNumber = 7;
var prependNumber = 1;



// select functionality

let x, i, j, l, a;
// select all the 'select' tag with custome css
const selects = document.getElementsByClassName("custom-select");
// get the length of all the selects 
const length = selects.length;

console.log(length);

// make a looop from 0 to l select elements
for(i = 0; i < length; i++){
    // create a selected element for our custome select
    selElm = selects[i].getElementsByTagName('select')[0];
    // getting the length of our money variables
    optionsLength = moneyType.length;
    for(j = 0; j < optionsLength; j++){
        a = document.createElement("option");
        a.setAttribute("class", "custom-option");
        a.setAttribute("value", moneyType[j]);
        a.text = moneyType[j];
        selects[i].appendChild(a);
    }
}