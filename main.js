const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

//SEARCH
const disSearchBtn = document.querySelector(".search1");
const SearchBtn = document.querySelector(".search-btn");
const sCloseBtn = document.querySelector(".sclose-btn");

SearchBtn.addEventListener("click", () => {
  disSearchBtn.style.display = "flex";
});

sCloseBtn.addEventListener("click", () => {
  disSearchBtn.style.display = "none";
});

//theme
const themeToggler = document.querySelector(".theme-toggler");

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

//iphone 11
const cartBtn = document.querySelector(".cart1");
const cart2Btn = document.querySelector(".cart2");
const cart1Btn = document.querySelector(".cart1");

cart2Btn.addEventListener("click", () => {
  cartBtn.style.display = "flex";
});

cart1Btn.addEventListener("click", () => {
  cartBtn.style.display = "none";
});

//iphone 13
const firstBtn = document.querySelector("#cart1");
const secBtn = document.querySelector("#cart2");
const first1Btn = document.querySelector("#cart1");

secBtn.addEventListener("click", () => {
  firstBtn.style.display = "flex";
});

first1Btn.addEventListener("click", () => {
  firstBtn.style.display = "none";
});

//iphone 12
const cart3Btn = document.querySelector("#cart3");
const cart3sBtn = document.querySelector("#cart3s");
const cart3ssBtn = document.querySelector("#cart3");

cart3sBtn.addEventListener("click", () => {
  cart3Btn.style.display = "flex";
});

cart3ssBtn.addEventListener("click", () => {
  cart3Btn.style.display = "none";
});

//iphone xr
const cart4Btn = document.querySelector("#cart4");
const cart4sBtn = document.querySelector("#cart4s");
const cart4ssBtn = document.querySelector("#cart4");

cart4sBtn.addEventListener("click", () => {
  cart4Btn.style.display = "flex";
});

cart4ssBtn.addEventListener("click", () => {
  cart4Btn.style.display = "none";
});

//xsmax
const cart5Btn = document.querySelector("#cart5");
const cart5sBtn = document.querySelector("#cart5s");
const cart5ssBtn = document.querySelector("#cart5");

cart5sBtn.addEventListener("click", () => {
  cart5Btn.style.display = "flex";
});

cart5ssBtn.addEventListener("click", () => {
  cart5Btn.style.display = "none";
});

const cart6Btn = document.querySelector("#cart6");
const cart6sBtn = document.querySelector("#cart6s");
const cart6ssBtn = document.querySelector("#cart6");

cart6sBtn.addEventListener("click", () => {
  cart6Btn.style.display = "flex";
});

cart6ssBtn.addEventListener("click", () => {
  cart6Btn.style.display = "none";
});

const cart7Btn = document.querySelector("#cart7");
const cart7sBtn = document.querySelector("#cart7s");
const cart7ssBtn = document.querySelector("#cart7");

cart7sBtn.addEventListener("click", () => {
  cart7Btn.style.display = "flex";
});

cart7ssBtn.addEventListener("click", () => {
  cart7Btn.style.display = "none";
});

const cart8Btn = document.querySelector("#cart8");
const cart8sBtn = document.querySelector("#cart8s");
const cart8ssBtn = document.querySelector("#cart8");

cart8sBtn.addEventListener("click", () => {
  cart8Btn.style.display = "flex";
});

cart8ssBtn.addEventListener("click", () => {
  cart8Btn.style.display = "none";
});
