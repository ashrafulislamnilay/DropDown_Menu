console.log("hello");
let menu = document.querySelector(".menu");
let menuIcon = document.querySelector(".menu i");
let dropdown = document.querySelector(".DropDown");


menu.onclick = function () {
    dropdown.classList.toggle("open");
    let isOpen = dropdown.classList.contains("open");
    menuIcon.classList = isOpen
    ?"fa-solid fa-xmark"
    :"fa-solid fa-bars"
    console.log("menu close")
}
