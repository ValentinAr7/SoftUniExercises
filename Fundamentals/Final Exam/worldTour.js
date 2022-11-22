function worldTour (input){


    let wrldTour = input.shift()
    let index = 0
    let command = input[index]
    
    while (command !== "Travel"){
        
        let command = input[index]
        index++
        console.log(command);

    }

}

worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])