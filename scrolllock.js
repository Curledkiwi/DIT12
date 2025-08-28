document.querySelectorAll(".dropdown-content").forEach((element) => {
    element.addEventListener("mouseenter", () => {
        if (window.innerWidth <= 600) {
            console.log(window.innerWidth);
            document.body.style.overflow = "hidden";
        }
    })

    element.addEventListener("mouseleave", () => {
        document.body.style.overflow = "auto";
    })
});