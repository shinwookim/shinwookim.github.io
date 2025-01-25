document.documentElement.setAttribute("data-bs-theme",
    (localStorage.getItem("color-mode") ? localStorage.getItem("color-mode") : detectColorMode()));
document.getElementById("theme-toggle-content").classList.add(
    document.documentElement.getAttribute("data-bs-theme") == "dark" ? "fa-moon" : "fa-sun"
);

document.getElementById("theme-toggle").addEventListener("click", () => {
    document.documentElement.getAttribute("data-bs-theme") == "dark"
        ? (document.documentElement.setAttribute("data-bs-theme", "light"),
            localStorage.setItem("color-mode", "light"),
            document.getElementById("theme-toggle-content").classList.remove("fa-moon"),
            document.getElementById("theme-toggle-content").classList.add("fa-sun")
        )
        : (document.documentElement.setAttribute("data-bs-theme", "dark"),
            localStorage.setItem("color-mode", "dark"),
            document.getElementById("theme-toggle-content").classList.remove("fa-sun"),
            document.getElementById("theme-toggle-content").classList.add("fa-moon")
        );
});

function detectColorMode() {
    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        document.getElementById("theme-toggle-content").classList.add("fa-moon")
        return "dark";
    } else if (window.matchMedia) {
        document.getElementById("theme-toggle-content").classList.remove("fa-sun")
        return "light";
    }
    return "dark"; // default
}
