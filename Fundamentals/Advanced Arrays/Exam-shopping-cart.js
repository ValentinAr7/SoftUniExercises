function shopping(input){

    let shoppingList = input.shift()
    let commands = input.slice()
    let initialShoppingList = shoppingList.split("!")
    let currentCommand = commands.shift()   //takes the command
   
    //Alternative to the code above    
    // let products = input.shift(input[0]).replaceAll("!", " ")
    // products.split("!") to remove the ! from the variable

   while(currentLine != "Go shopping!"){         
    currentCommand= commands.shift()        //removes the current command from the array and goes to the next one
    let Lineargs = currentLine.split(" ");
    let command = Lineargs[0];
    let firstArgument = Lineargs[1]
    let secondArgument = Lineargs[2]    

    }

    switch (command) {
        case "Urgent":
            
            break;

            case "Unnecessary":
            
                break;

                case "Correct":
            
                    break;
    

    }
   
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