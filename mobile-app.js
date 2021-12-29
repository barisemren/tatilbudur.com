
function menuOpen() {
    const fullPage = document.querySelector(".mobile-view");
    const menu = document.querySelector(".mobile-menu-open");
    const navbar = document.querySelector(".mobile-navbar");

    fullPage.style.display = "none";
    menu.style.width ="375px";
    menu.style.transition = "width 1s";
}

function menuClose() {
    const fullPage = document.querySelector(".mobile-view");
    const menu = document.querySelector(".mobile-menu-open");
    const navbar = document.querySelector(".mobile-navbar");

    fullPage.style.display = "block";
    menu.style.width ="0px";
    menu.style.transition = "width 0.5s";
}