function addItem() {
    
    //select input field and read its value
    let text = document.getElementById("newItemText").value;

    //create new empty li element
    //this li element is stored in the RAM but ot displayed
    //on the screen
    let liElement = document.createElement("li")

    //assign input value to element text content
    liElement.textContent = text

    const deleteBtn = document.createElement("a");
    deleteBtn.textContent = '[Delete]'
    deleteBtn.href = "#"
    liElement.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', onDelete)

    //appent the child to the parent ul items
    //not the li is visible on the screen
    let ulElement = document.getElementById("items")
    ulElement.appendChild(liElement)

    //select input field and clear content value
    document.getElementById("newItemText").value = ""
}

function onDelete(event){
event.target.parentElement.remove()
}