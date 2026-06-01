const menu = document.querySelector(".menu");
const tabs = document.querySelectorAll(".tab");
const games = document.querySelectorAll(".game");
const showAll = document.querySelector(".show-all");
const toast = document.querySelector(".toast");

document.querySelector(".menu-btn").addEventListener("click", () => menu.classList.toggle("open"));

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const filter = tab.dataset.filter;
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    games.forEach((game) => game.classList.toggle("hide", filter !== "all" && !game.dataset.category.includes(filter)));
  });
});

showAll.addEventListener("click", () => {
  tabs.forEach((item) => item.classList.toggle("active", item.dataset.filter === "all"));
  games.forEach((game) => game.classList.remove("hide"));
});

document.querySelectorAll(".download, .client-link").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    toast.classList.add("show");
  });
});

document.querySelector(".ok").addEventListener("click", () => {
  toast.innerHTML = "<strong>Операцію підтверджено</strong><span>Завантаження скоро почнеться.</span>";
});
document.querySelector(".cancel").addEventListener("click", () => {
  toast.innerHTML = "<strong>Операцію скасовано</strong><span>Завантаження не починалось.</span>";
});
