

const productsTable = document.getElementById("products")
const currentTable = document.getElementById("currentTable")
const sum = document.getElementById("sum")


for (var [key,val] of Object.entries(localStorage)){

    var row = document.createElement("tr")

    var c1 = document.createElement("td")
    var c2 = document.createElement("td")

    if (key.indexOf("product:")!=-1)
        c1.innerHTML = key.slice(8);
    else c1.innerHTML = key;
    c2.textContent = val+"€";

    c1.classList.add("prodsClass")

    row.appendChild(c1)
    row.appendChild(c2)

    productsTable.appendChild(row)

}

//adds item to current customer
function addCurrent(){
    var txt=this.innerHTML

    var price = localStorage.getItem("product:"+txt)+"€"

    var row = document.createElement("tr")
    var c1 = document.createElement("td")
    var c2 = document.createElement("td")

    c1.innerHTML = txt;
    c2.innerHTML = price;

    row.appendChild(c1)
    row.appendChild(c2)

    currentTable.appendChild(row)

    if (sum.innerHTML=="Summe: 0-.")
        sum.innerHTML = "Summe: €"+price.substring(0,price.length-1)
    else{
        var currentSum = sum.innerHTML.slice(8)
        sum.innerHTML="Summe: €"+(parseFloat(currentSum)+parseFloat(price))
    }

}

var prods = document.getElementsByClassName("prodsClass")

for (var i=0;i<prods.length;i++){
    prods[i].addEventListener("click",addCurrent)
}

function finish(){
    currentTable.innerHTML="<tr><th colspan='2'>Momentan</th></tr><tr><th>Produkt</th><th>Preis</th></tr>"
}
