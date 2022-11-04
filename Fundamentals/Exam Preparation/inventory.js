function inventory (array){

    let journal = array.shift().split(" ")
    console.log(journal);
    currentCommand = array.shift()
    console.log(currentCommand);

//     while (currentCommand != "Craft!") {
        
//         let lineItems = currentCommand.split("-")
//         let command = lineItems[0]
//         let item = lineItems[1]
            

// }
}

inventory(["Iron Wood Sword",
    "Collect - Gold",
    "Drop - Wood",
    "Craft!"
    ])