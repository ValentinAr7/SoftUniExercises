function worldTour (input){


    let wrldTour = input.shift()
    let command = input.shift()
    
    while (command !== "Travel"){
        
        let [action, firstParam, lastParam] = input.split(":")
        let startIndex;
        let lastIndex
        
        switch (arg1) {
            case "Add Stop":
                wrldTour.push(arg3[arg2])
                break;
        
            default:
                break;
        }

        command = input[index]    
    }
}

worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])