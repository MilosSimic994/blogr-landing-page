const menuItem = document.querySelectorAll(".menu-mob-item");
const subMenuItem = document.querySelectorAll(".sub-menu");
console.log(menuItem);

const showSubMenu = (e) => {
  subMenuItem.forEach((item) => {
    console.log(item);
    if (item.classList.contains("visible")) {
      item.classList.remove("visible");
    }
  });
  e.target.firstElementChild.classList.add("visible");
};

menuItem.forEach((item) => {
  item.addEventListener("click", showSubMenu);
});
