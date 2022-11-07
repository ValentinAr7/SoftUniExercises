function treasurHunt(input){

let initialLoot = input.shift().split("|")
let end = input.pop()

let currentLine = input[0]

for(let i = 0; i < input.length; i++){

    let lineArguments = currentLine.split(" ")
    let command = lineArguments[0]
    console.log(lineArguments);
}

}

treasurHunt (["Gold|Silver|Bronze|Medallion|Cup,",
                "Loot Wood Gold Coins",
                "Loot Silver Pistol,",
                "Drop 3",
                "Steal 3",
                "Yohoho!"
            ])