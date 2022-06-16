
var addProd = document.getElementById("addProduct")

var menu = document.getElementById("leftBar")
var menuIcon = document.getElementById("menuIcon");
var menuText = document.getElementsByClassName("menuText");

var showAdded = document.getElementById("showAdded")


function closeAddProduct(){
    addProd.style.display = "none"
}

function OpenAddProduct(){
    addProd.style.display = "block"
    showAdded.innerHTML = ""
    

    openOrCloseMenu()


}

function addProduct(){

}
