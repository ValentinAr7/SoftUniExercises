function shopping(input){

    let rowList = input.shift()
    let commands = input.slice()
    let ShoppingList = rowList.split("!")
    let currentLine = commands.shift()   //takes the command

    

    //Alternative to the code above    
    // let products = input.shift(input[0]).replaceAll("!", " ")
    // products.split("!") to remove the ! from the variable

   while(currentLine != "Go shopping!"){         
    let Lineargs = currentLine.split(" ");
    let command = Lineargs[0];
    let firstArgument = Lineargs[1]
    let secondArgument = Lineargs[2]    

    switch (command) {

        case "Urgent":
            if(!ShoppingList.includes(firstArgument)){
            ShoppingList.unshift(firstArgument)
            }
            break;


            case "Unnecessary":
                let itemIndex = ShoppingList.indexOf(firstArgument);

                if(itemIndex > -1){
                    ShoppingList.splice(itemIndex, 1)
                }
                break;



                case "Correct":
            let updateIndex = ShoppingList.indexOf(firstArgument)

            if(updateIndex > -1){
                ShoppingList[updateIndex] = secondArgument
            }
                    break;


                    case "Rearrange":
                        let removeIndex =  ShoppingList.indexOf(firstArgument);

                        if(removeIndex > -1){
                            let element = ShoppingList[removeIndex]
                            ShoppingList.splice(removeIndex, 1)
                            ShoppingList.push(element)
                        }
    }
                    
    currentLine = commands.shift()

    }
    
    console.log(ShoppingList.join(","));
        }
    



shopping(["Tomatoes!Potatoes!Bread",

"Unnecessary Potatoes",

"Urgent Tomatoes",

"Go Shopping!"])