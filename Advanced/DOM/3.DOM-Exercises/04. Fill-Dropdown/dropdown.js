function addItem() {

    let text = document.getElementById("newItemText").value
    let value = document.getElementById("newItemValue").value
    let select = document.getElementById('menu');

    let optionElement = document.createElement("option")
    optionElement.textContent = text + " " + value
    console.log(optionElement);

    select.appendChild(optionElement)

    text.textContent = ""
    value.textContent = ""

}