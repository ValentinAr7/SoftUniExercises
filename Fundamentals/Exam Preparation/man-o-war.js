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
        let index1 = Number(tokens[1])
        let index2 = Number(tokens[2])
        let index3 = Number(tokens[3])
        
        switch (operation) {
            case "Fire":
                if(index1 < statusWarShip.length){

            statusWarShip[index1] = statusWarShip[index1] - index2
            }

            if(statusWarShip[index1] <= 0){
                console.log("You won! The enemy ship has sunken.");
            }
                break;



                case "Defend":
                i = Number(tokens[1])
                let end = Number(tokens[2])
                let dmg = Number(tokens[3])

                if(i < 0 || i > statusOfShip.length || end < 0 || end > statusOfShip.length){
                    command = data[index]
                    index++
                    continue
                }

                for(let x = i; x <= end; x++){
                    statusOfShip[x] = statusOfShip[x] - dmg
                }

                case "Repair":
                    
                    break
        }

        command = data[index]
        index++
    }
console.log(statusOfShip);

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