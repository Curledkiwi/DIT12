document.querySelectorAll(".dropdown-content").forEach((element) => {
    const windowwidth = getComputedStyle(document.documentElement).getPropertyValue('--mobile-width');
    element.addEventListener("mouseenter", () => {
        element.style.background = "orange";
    })
}