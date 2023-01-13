function addItem() {

    let text = document.getElementById("newItemText").value
    let NewValue = document.getElementById("newItemValue").value
    let select = document.getElementById('menu');

    let optionElement = document.createElement("option")
    optionElement.textContent = text + " " + NewValue
    console.log(optionElement);

    select.appendChild(optionElement)

    text.value = ""
    NewValue.value = ""

}