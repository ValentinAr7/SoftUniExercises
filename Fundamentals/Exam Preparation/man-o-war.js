function manOwar (data){

    let statusOfShip = data.shift().split(">")
    let statusWarShip = data.shift().split(">")
    let maximumHealth = data.shift()

    let index = 0
    let command = data[index]
    index++
    while(command != "Retire"){
        let tokens = command.split(" ")
        let operation = tokens[0]
        let atackIndex = tokens[1]
        let damage = tokens[2]
        
        switch (operation) {
            case "Fire":
            statusWarShip[atackIndex] = statusWarShip[atackIndex] - damage
                console.log(statusWarShip);
                break;
        
            default:
                break;
        }

        command = data[index]
        index++
    }


}

manOwar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"
    ])