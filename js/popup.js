var link = document.querySelector(".write");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var login = popup.querySelector(".input-name");
var email = popup.querySelector(".input-e-mail");
var letter = popup.querySelector("textarea");
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");
              
link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    login.focus();
    if (storage) {
        login.value = storage;
        email.focus();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event){
    if (!login.value || !email.value || !letter.value){
        event.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
        console.log("Нужно ввести имя, ваш e-mail и текст письма");
    } else {
        localStorage.setItem("login", login.value);
    }
});

window.addEventListener("keydown", function(event) {
   if (event.keyCode === 27) {
       if (popup.classList.contains("modal-content-show")) {
        popup.classList.remove("modal-content-show");
        popup.classList.remove("modal-error");
     }
   } 
});