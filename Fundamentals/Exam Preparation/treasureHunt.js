function treasurHunt(input){

let initialLoot = input.shift().split("|")
let end = input.pop()


for(let i = 0; i < input.length; i++){
    let currentLine = input[i]  //all


    let lineArguments = currentLine.split(" ") // ["wood", "gold", "coins"]
    let command = lineArguments.shift()        //commands only
    let item1 = lineArguments[1]
    let item2 = lineArguments[2]
    let item3 = lineArguments[3]

    console.log(currentLine);


}

}

treasurHunt (["Gold|Silver|Bronze|Medallion|Cup,",
                "Loot Wood Gold Coins",
                "Loot Silver Pistol,",
                "Drop 3",
                "Steal 3",
                "Yohoho!"
            ])