
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

function hotelsOpen() {
    const hotels = document.querySelector(".mobile-menu-hotels-open");
    
    
    if(hotels.style.height == "0px"){
        hotels.style.height = "389px";
        hotels.style.transition = "height 1s"
        hotels.style.margin= "10px 60px 20px 23px";
    }
    else{
        hotels.style.height = "0px";
        hotels.style.transition = "height 1s, margin 1s";
        hotels.style.margin= "0px 60px 0px 23px";
    }
}

function toursOpen() {
    const tours = document.querySelector(".mobile-menu-tours-open");
    
    
    if(tours.style.height == "0px"){
        tours.style.height = "289px";
        tours.style.transition = "height 1s"
        tours.style.margin= "10px 40px 20px 23px";
    }
    else{
        tours.style.height = "0px";
        tours.style.transition = "height 1s, margin 1s";
        tours.style.margin= "0px 40px 0px 23px";
    }
}
