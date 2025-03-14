// Get toggle button and body
const toggleSwitch = document.getElementById("theme-toggle");
const body = document.body;

// Check if dark mode is saved in localStorage
if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    toggleSwitch.checked = true;
}

// Toggle event listener
toggleSwitch.addEventListener("change", () => {
    if (toggleSwitch.checked) {
        body.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "enabled");
    } else {
        body.classList.remove("dark-mode");
        localStorage.setItem("dark-mode", "disabled");
    }
});