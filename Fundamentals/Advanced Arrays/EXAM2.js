function exam2(array) {

    let travel = array.shift().split("||")
    let startingFuel = Number(array[0])
    let ammunition = Number(array[1])

    let currentCommand = travel.shift()
console.log(currentCommand);
    // let currentLine = travel.shift()

    while (currentCommand != "Titan") {
        
        let lineargs = currentCommand.split(" ");
        let command = lineargs[0];
        let firstArgument = lineargs[1]
        let defeat = false

        switch (command) {
            case "Travel":
                    startingFuel -= firstArgument
                    if (startingFuel > 0) {
                        console.log(`The spaceship travelled ${firstArgument} light-years.`);
                    } 
                break;


            case "Enemy":
                if(ammunition >= firstArgument){
                    ammunition -= firstArgument
                    console.log(`An enemy with ${firstArgument} armour is defeated.`);
                } else {

                startingFuel -= firstArgument * 2
                if(startingFuel > 0){
                console.log(`An enemy with ${firstArgument} armour is outmaneuvered.`);
                }
                }
                break;



            case "Repair":
                ammunition += firstArgument * 2
                console.log(`Ammunitions added: ${firstArgument * 2}.`);

                startingFuel += firstArgument
                console.log(`Fuel added: ${firstArgument}.`);
                break;
      
        }
        currentCommand = travel.shift()

    }

    
        if(ammunition < 30){
            console.log(`You have reached Titan, all passengers are safe.`);
        } else {
            console.log("Mission failed.");
        }

}


exam2(["Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan",
    "60",
    "100"
])