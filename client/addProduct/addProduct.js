
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
    price.replace(",",".")

    localStorage.setItem("product:"+name,price)
    alert("Hinzugefügt!")
    addProd.style.display="none"

    const prods = document.getElementById("products")

    prods.innerHTML="<tr><th colspan='2'>Produkte</th></tr><tr> <th>Produkt</th> <th>Preis</th> </tr>"

    for (var [key,val] of Object.entries(localStorage)){
        if (key.indexOf("product:")==-1) return;
        
        var row = document.createElement("tr")
        var c1=document.createElement("td")
        var c2 = document.createElement("td")

        c1.classList.add("prodsClass")

        c1.innerHTML = key.slice(8);
        c2.innerHTML = val+"€";

        row.appendChild(c1)
        row.appendChild(c2)

        prods.appendChild(row)


    }

    var prodClasss = document.getElementsByClassName("prodsClass")
    for(var i=0;i<prodClasss.length;i++){
        prodClasss[i].addEventListener("click",addCurrent)
        console.log("asd")
    }

}
