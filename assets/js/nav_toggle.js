const menu = document.getElementById("nav-menu");
if (menu != null) {
  document.getElementById("nav-toggle").addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
}
