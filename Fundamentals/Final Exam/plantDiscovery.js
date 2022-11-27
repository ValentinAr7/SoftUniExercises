function plantDiscovery (input){

    let plantCount = input.shift()
    let plants = {}

    for(let i = 0; i < plantCount; i++){
       let plant = input.shift()
        
        let [plantName, rarity]= plant.split("<->")

        plants[plantName] = {                 //put into "plants"
            rarity: Number(rarity),                   // it returns the 
            ratings: []             // the name of the object with its characteristics in the following format:
                                    // plantName: {rarity: "4", rating: "0"}
        }
    }
    
    let command = input.shift()
    while(command !== "Exhibition"){
        let [commandName, args] = command.split(": ");
        let [plantName, argument] = args.split(" - ")

        switch (commandName) {
            case "Rate":
                let rating = Number(argument)
                plants[plantName].ratings.push(argument)
        // take from the class "plants" the specific plant "PlantName"
        // store the second rating in the array "rating"
                break;
        
            case "Update":

                break;
        }


        command = input.shift
    }
console.table(plants)
}

plantDiscovery(["3",
                "Arnoldii<->4",
                "Woodii<->7",
                "Welwitschia<->2",
                "Rate: Woodii - 10",
                "Rate: Welwitschia - 7",
                "Rate: Arnoldii - 3",
                "Rate: Woodii - 5",
                "Update: Woodii - 5",
                "Reset: Arnoldii",
                "Exhibition"])