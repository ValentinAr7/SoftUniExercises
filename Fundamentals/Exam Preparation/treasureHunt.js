function treasurHunt(input){

let initialLoot = input.shift().split("|")

let index = 0
let command = input[index]
index++

while(command !== "Yohoho"){
    let tokens = command.split(" ") // ["wood", "gold", "coins"]
    let operation = tokens.shift()        //commands only

    switch (command) {
        case "Loot":
                treasureChest.push(currentLine)
            break;
    
        default:
            break;
    }
}



}




let treasureChest = []
treasureChest.push(initialLoot)

for(let i = 0; i < input.length; i++){
    let currentLine = input[i]  //all



    console.log(currentLine);


}

treasurHunt (["Gold|Silver|Bronze|Medallion|Cup,",
                "Loot Wood Gold Coins",
                "Loot Silver Pistol,",
                "Drop 3",
                "Steal 3",
                "Yohoho!"
            ])