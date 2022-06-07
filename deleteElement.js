function deleteElement (input){

    let deleteElement = input[0]

    for (let i = 0; i <= deleteElement.length; i++){
        console.log(deleteElement.splice(2, 2)); 
        
    }
    console.log(deleteElement);
}

deleteElement(["Valentin", "Arnautski", "Tolstoy", "Nadejda"])