const toggleBtn = document.getElementById("theme-toggle");
const moon_icon = document.getElementById("theme-toggle-moon");
const sun_icon = document.getElementById("theme-toggle-sun");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
	document.documentElement.classList.add("dark");
	moon_icon.classList.toggle("hidden");
} else {
	sun_icon.classList.toggle("hidden");
}

toggleBtn.addEventListener("click", () => {
	const isDark = document.documentElement.classList.toggle("dark");
	localStorage.setItem("theme", isDark ? "dark" : "light");

	// Swap icon
	moon_icon.classList.toggle("hidden");
	sun_icon.classList.toggle("hidden");
});
