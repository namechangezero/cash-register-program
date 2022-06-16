
var menuText = document.getElementsByClassName("menuText");
var menu = document.getElementById("leftBar")
menu.style.display = "none";

var menuIcon = document.getElementById("menuIcon");


function openMenu(){


    if (menu.style.display === "none") {

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");

        menu.style.animationName="AmLeftBar";

        for (var i = 0; i < menuText.length; i++)
            menuText[i].style.animationName="AmLeftBarText";
        
        menu.style.display = "block";
    }
    else {

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

        for (var i = 0; i < menuText.length; i++)
            menuText[i].style.animationName="LeftBarCloseText";
        menu.style.animationName="LeftBarClose";
    }

}

menu.onanimationend=()=>{
    if (menu.style.animationName==="LeftBarClose"){
        menu.style.display="none";
    }
}


function openOrCloseMenu(){
    openMenu()
}

