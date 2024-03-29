function treasurHunt(input) {

    let initialLoot = input.shift().split("|")

    let index = 0
    let command = input[index]
    index++

    while (command !== "Yohoho") {
        let tokens = command.split(" ")
        let operation = tokens.shift()     

        switch (operation){
            case "Loot":
                for (let el of tokens) {
                    if (!initialLoot.includes(el)) {
                        initialLoot.unshift(el)
                    }
                }
                break;

            case "Drop":
                let i = Number(tokens[0])
                initialLoot.push(initialLoot.splice(i, 1)[0])

                break

            case "Steal":
                let count = Number(tokens[0])
                let items = initialLoot.splice(-count)
                console.log(items.join(", "));
                break
        }
        command = input[index]
        index++
    }
    let sun = 0
    for(let el of initialLoot){
        sum+= el.length;
    }
    if(initialLoot.length > 0){
        let avg = sum / initialLoot.length
        console.log(`Avarage treasure gain: ${avg.toFixed(2)} pirate credits.`);
    } else {
        console.log("Failed treasure hunt.");
    }
}

treasurHunt([
    "Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol,",
    "Drop 3",
    "Steal 3",
    "Yohoho!"
])