function addItem() {

    let text = document.getElementById("newItemText").value
    let value = document.getElementById("newItemValue").value

    let optionElement = document.createElement("option")
    optionElement.textContent = text + value
    console.log(optionElement);

}