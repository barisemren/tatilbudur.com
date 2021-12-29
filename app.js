function firstShowHide() {

    const moreText1 = document.querySelector(".more-content-1");
    const moreText2 = document.querySelector(".more-content-2");
    const moreText3 = document.querySelector(".more-content-3");
    const btn = document.querySelector(".show-btn-1");
    const dot = document.querySelector(".dot-1");
    const firstText = document.querySelector("#first-content-1");
    const callcenterImg = document.querySelector(".callcenter-img");

    if(dot.style.display == "none"){
        dot.style.display = "inline";
        moreText1.style.display = "none"
        btn.innerHTML = "Devamını Oku";
        firstText.classList.add('first-content-1');
        callcenterImg.style.top = "4712px";
    }
    else{
        dot.style.display = "none";
        moreText1.style.display = "inline"
        btn.innerHTML = "Daha Az Göster";
        firstText.classList.remove('first-content-1');
        callcenterImg.style.top = "4775px";
    }
    if(moreText1.style.display == "inline" && moreText2.style.display == "none" && moreText3.style.display == "none"){
        callcenterImg.style.top = "4775px";  
    }
    if(moreText2.style.display == "inline" && moreText1.style.display == "none" && moreText3.style.display == "none"){
        callcenterImg.style.top = "4818px";  
    }
    if(moreText3.style.display == "inline" && moreText2.style.display == "none" && moreText1.style.display == "none"){
        callcenterImg.style.top = "4733px";  
    }


    if(moreText1.style.display == "inline" && moreText2.style.display == "inline" && moreText3.style.display == "none"){
        callcenterImg.style.top = "4881px";
    }
    if(moreText1.style.display == "inline" && moreText3.style.display == "inline" && moreText2.style.display == "none"){
        callcenterImg.style.top = "4796px";
    }
    if(moreText2.style.display == "inline" && moreText3.style.display == "inline" && moreText1.style.display == "none"){
        callcenterImg.style.top = "4839px";
    }
    if(moreText1.style.display == "inline" && moreText2.style.display == "inline" && moreText3.style.display == "inline"){
        callcenterImg.style.top = "4902px";
    }

}
function secondShowHide() {

    const moreText2 = document.querySelector(".more-content-2");
    const moreText1 = document.querySelector(".more-content-1");
    const moreText3 = document.querySelector(".more-content-3");
    const btn = document.querySelector(".show-btn-2");
    const dot = document.querySelector(".dot-2");
    const firstText = document.querySelector("#first-content-2");
    const callcenterImg = document.querySelector(".callcenter-img");

    if(dot.style.display == "none"){
        dot.style.display = "inline";
        moreText2.style.display = "none"
        btn.innerHTML = "Devamını Oku";
        firstText.classList.add('first-content-2');
        callcenterImg.style.top = "4712px";
    }
    else{
        dot.style.display = "none";
        moreText2.style.display = "inline"
        btn.innerHTML = "Daha Az Göster";
        firstText.classList.remove('first-content-2');
        callcenterImg.style.top = "4818px";
    }
    if(moreText1.style.display == "inline" && moreText2.style.display == "none" && moreText3.style.display == "none"){
        callcenterImg.style.top = "4775px";  
    }
    if(moreText2.style.display == "inline" && moreText1.style.display == "none" && moreText3.style.display == "none"){
        callcenterImg.style.top = "4818px";  
    }
    if(moreText3.style.display == "inline" && moreText2.style.display == "none" && moreText1.style.display == "none"){
        callcenterImg.style.top = "4733px";  
    }


    if(moreText1.style.display == "inline" && moreText2.style.display == "inline" && moreText3.style.display == "none"){
        callcenterImg.style.top = "4881px";
    }
    if(moreText1.style.display == "inline" && moreText3.style.display == "inline" && moreText2.style.display == "none"){
        callcenterImg.style.top = "4796px";
    }
    if(moreText2.style.display == "inline" && moreText3.style.display == "inline" && moreText1.style.display == "none"){
        callcenterImg.style.top = "4839px";
    }
    if(moreText1.style.display == "inline" && moreText2.style.display == "inline" && moreText3.style.display == "inline"){
        callcenterImg.style.top = "4902px";
    }

}
function thirdShowHide() {

    const moreText3 = document.querySelector(".more-content-3");
    const moreText2 = document.querySelector(".more-content-2");
    const moreText1 = document.querySelector(".more-content-1");
    const btn = document.querySelector(".show-btn-3");
    const dot = document.querySelector(".dot-3");
    const firstText = document.querySelector("#first-content-3");
    const callcenterImg = document.querySelector(".callcenter-img");

    if(dot.style.display == "none"){
        dot.style.display = "inline";
        moreText3.style.display = "none"
        btn.innerHTML = "Devamını Oku";
        firstText.classList.add('first-content-3');
        callcenterImg.style.top = "4712px";
    }
    else{
        dot.style.display = "none";
        moreText3.style.display = "inline"
        btn.innerHTML = "Daha Az Göster";
        firstText.classList.remove('first-content-3');
        callcenterImg.style.top = "4733px";
    }
    if(moreText1.style.display == "inline" && moreText2.style.display == "none" && moreText3.style.display == "none"){
        callcenterImg.style.top = "4775px";  
    }
    if(moreText2.style.display == "inline" && moreText1.style.display == "none" && moreText3.style.display == "none"){
        callcenterImg.style.top = "4818px";  
    }
    if(moreText3.style.display == "inline" && moreText2.style.display == "none" && moreText1.style.display == "none"){
        callcenterImg.style.top = "4733px";  
    }
    


    if(moreText1.style.display == "inline" && moreText2.style.display == "inline" && moreText3.style.display == "none"){
        callcenterImg.style.top = "4881px";
    }
    if(moreText1.style.display == "inline" && moreText3.style.display == "inline" && moreText2.style.display == "none"){
        callcenterImg.style.top = "4796px";
    }
    if(moreText2.style.display == "inline" && moreText3.style.display == "inline" && moreText1.style.display == "none"){
        callcenterImg.style.top = "4839px";
    }
    if(moreText1.style.display == "inline" && moreText2.style.display == "inline" && moreText3.style.display == "inline"){
        callcenterImg.style.top = "4902px";
    }

}
function carousel(){
    const background = document.querySelector(".carousel");
    const content = document.querySelector(".carousel-content-upper");
    const dot1 = document.querySelector(".dot-1");
    const dot2 = document.querySelector(".dot-2");
    const dot3 = document.querySelector(".dot-3");
    const dot4 = document.querySelector(".dot-4");
    const dot5 = document.querySelector(".dot-5");
    const dot6 = document.querySelector(".dot-6");
    
    dot1.addEventListener("click", function(){
        background.style.backgroundImage = "url('./assets/shutterstock.png')";
        content.innerHTML="Erken Rezervasyon <br> Festivali";
    })
    dot2.addEventListener("click", function(){
        background.style.backgroundImage = "url('./assets/shutterstock.png')";
        content.innerHTML="Erken Rezervasyon <br> Festivali 2";
    })
    dot3.addEventListener("click", function(){
        background.style.backgroundImage = "url('./assets/shutterstock.png')";
        content.innerHTML="Erken Rezervasyon <br> Festivali 3";
    })
    dot4.addEventListener("click", function(){
        background.style.backgroundImage = "url('./assets/shutterstock.png')";
        content.innerHTML="Erken Rezervasyon <br> Festivali 4";
    })
    dot5.addEventListener("click", function(){
        background.style.backgroundImage = "url('./assets/shutterstock.png')";
        content.innerHTML="Erken Rezervasyon <br> Festivali 5";
    })
    dot6.addEventListener("click", function(){
        background.style.backgroundImage = "url('./assets/shutterstock.png')";
        content.innerHTML="Erken Rezervasyon <br> Festivali 6";
    })
}
function hotelHover(){
    const navbar = document.querySelector(".navbar-hover");
    const navbarHotels = document.querySelector(".hotels-hover");
    const navbarTours = document.querySelector(".tours-hover");

    navbar.style.display ="block";
    navbar.style.marginLeft ="222px";
    navbarHotels.style.display ="grid";
    navbarTours.style.display = "none";
}
function tourHover(){
    const navbar = document.querySelector(".navbar-hover");
    const navbarTours = document.querySelector(".tours-hover");
    const navbarHotels = document.querySelector(".hotels-hover");

    navbar.style.display ="block";
    navbar.style.marginLeft ="500px";
    navbarTours.style.display ="grid";
    navbarHotels.style.display ="none";
}
function closeHotelHover(){

    const navbar = document.querySelector(".navbar-hover");
    const navbarHotels = document.querySelector(".hotels-hover");

    navbar.style.display ="none";
    navbarHotels.style.display ="none";

}
function closeTourHover(){

    const navbar = document.querySelector(".navbar-hover");
    const navbarTours = document.querySelector(".tours-hover");

    navbar.style.display ="none";
    navbarTours.style.display ="none";

}

