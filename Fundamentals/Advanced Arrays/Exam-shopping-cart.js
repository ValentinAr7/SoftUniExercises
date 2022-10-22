function shopping(input){

    let shoppingList = []

    let products = input.shift(input[0]).replaceAll("!", " ")

    console.log(products);


    for(let i = 0; i < input.length; i++){
        
        let elements = input[i].split(" ")

        if(elements[0] == "Unnecessary"){
            products.splice(elements[1], 1)
            console.log(products);






            // if(products.includes(elements[1])){
            // let index = products.indexOf(elements[1])
            // console.log(index);

            
            }
        }
    }



shopping(["Tomatoes!Potatoes!Bread",

"Unnecessary Potatoes",

"Urgent Tomatoes",

"Go Shopping!"])