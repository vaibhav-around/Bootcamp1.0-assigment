const eyeIcon = document.getElementById("eye-icon");
const passInput = document.getElementById('pass');

eyeIcon.addEventListener("click", () => {
     let text = eyeIcon.classList.value;
      if(text == "ri-eye-line"){
        passInput.type = "text";
        eyeIcon.classList.replace("ri-eye-line", "ri-eye-close-line");
      }else {
        passInput.type = "password";
        eyeIcon.classList.replace("ri-eye-close-line","ri-eye-line");
      }   
})
