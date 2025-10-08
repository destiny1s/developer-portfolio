const scrollTopButton = document.getElementById("scroll-to-top");

scrollTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.addEventListener("scroll", () => {
    const scrollDiff = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollDiff > 300) scrollTopButton.style.display = "block";
    else scrollTopButton.style.display = "none";
});