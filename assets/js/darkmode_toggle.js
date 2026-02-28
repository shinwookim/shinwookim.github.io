const toggleBtn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-toggle-content");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
	document.documentElement.classList.add("dark");
	icon.classList.add("fa-moon");
} else {
	icon.classList.add("fa-sun");
}

toggleBtn.addEventListener("click", () => {
	const isDark = document.documentElement.classList.toggle("dark");

	localStorage.setItem("theme", isDark ? "dark" : "light");

	// Swap icon
	icon.classList.toggle("fa-sun");
	icon.classList.toggle("fa-moon");
});