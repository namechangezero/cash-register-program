
var addProd = document.getElementById("addProduct")

var menu = document.getElementById("leftBar")
var menuIcon = document.getElementById("menuIcon");
var menuText = document.getElementsByClassName("menuText");

var showAdded = document.getElementById("showAdded")

var prodName = document.getElementById("prodName")
var prodPrice = document.getElementById("prodPrice")

function closeAddProduct(){
    addProd.style.display = "none"
}

function OpenAddProduct(){
    addProd.style.display = "block"
    showAdded.innerHTML = ""

    prodPrice.value=""
    prodName.value=""


    openOrCloseMenu()


}

function addProduct(){
    var price = prodPrice.value, name = prodName.value
    if (price.indexOf("€")!=-1){
        alert("Entferne das Eurozeichen im Preis. Der Preis ist bereits in Euro festgelegt.")
        return
    }

    localStorage.setItem("product:"+name,price)
    alert("Hinzugefügt!")
    addProd.style.display="none"
}
