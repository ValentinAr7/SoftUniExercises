function plantDiscovery (input){

    let plantCount = input.shift()
    let plants = {}

    for(let i = 0; i < plantCount; i++){
       let plant = input.shift()
        
        let [plantName, rarity]= plant.split("<->")

        plants[plantName] = {                 //put into "plants"
            rarity: rarity,                   // it returns the 
            rating: 0               // the name of the object with its characteristics in the following format:
                                    // plantName: {rarity: "4", rating: "0"}
        }
    }
    
    let command = input.shift()
    while(command !== "Exhibition"){
        let [commandName, args] = command.split(": ");
        let arguments = args.split(" - ")
        command = input.shift
    }

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