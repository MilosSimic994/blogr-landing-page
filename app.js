const menuItem = document.querySelectorAll(".menu-mob-item");
const subMenuItem = document.querySelectorAll(".sub-menu");
const hamburgerIcon = document.querySelector(".hamburger-icon");

//show submenu navigation
const showSubMenu = (e) => {
  subMenuItem.forEach((item) => {
    console.log(item);
    if (item.classList.contains("visible")) {
      item.classList.remove("visible");
    }
  });
  e.target.firstElementChild.classList.add("visible");
};

//toggle menu
const toggleMenu = () => {
  console.log(menuItem);
  const mobMenu = menuItem[0].parentElement.parentElement;
  mobMenu.classList.toggle("visible");
};

//Event listeners
menuItem.forEach((item) => {
  item.addEventListener("click", showSubMenu);
});
hamburgerIcon.addEventListener("click", toggleMenu);
