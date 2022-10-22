function shopping(input){

    let shoppingList = []

    let products = input.shift(input[0])

   let products2 = products.replaceAll("!", " ")
    shoppingList.push(products2)


    for(let i = 0; i < input.length; i++){
        
        let elements = input[i].split(" ")

        // if(elements[0] == )
    }
}


shopping(["Tomatoes!Potatoes!Bread",

"Unnecessary Milk",

"Urgent Tomatoes",

"Go Shopping!"])