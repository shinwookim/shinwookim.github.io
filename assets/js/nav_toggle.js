const btn = document.getElementById("nav-toggle");
const menu = document.getElementById("nav-menu");

if (menu != null)
	btn.addEventListener("click", () => {
		menu.classList.toggle("hidden");
	});
