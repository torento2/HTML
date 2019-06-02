var btn = document.createElement("button");
var textBtn = document.createTextNode("Kliknij mnie");

//var attributeClass = document.createAttribute("class");

document.getElementById("parFirst").appendChild(btn);
btn.appendChild(textBtn);

//btn.setAttributeNode(attributeClass);

btn.setAttribute("class", "btn");


var paragraph = document.getElementById("paragraph1");
paragraph.innerHTML = "lorem <strong>ipsum</strong> dolor";
function showText() {
    alert("Komunikat nr 2");
}
document.getElementById("paragraph1").onclick = showText;
document.getElementById("paragraph2").style.color = "red";


