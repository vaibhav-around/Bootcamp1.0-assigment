const searchBox = document.querySelector(".search-box");
const searchInputBox = document.getElementById("search-box");

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