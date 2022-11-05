function inventory (array){

    let journal = array.shift().split(" ")
    console.log(journal);

        let currentLine = array[0]

    while (currentLine != "Craft!") {
        
        let lineItems = currentLine.split("-")
        let command = lineItems[0]
        let item = lineItems[1]
        console.log(lineItems);

}
}

inventory(["Iron Wood Sword",
    "Collect - Gold",
    "Drop - Wood",
    "Craft!"
    ])