function worldTour (input){


    let initialString = input.shift()
    let command = input.shift()
    console.log(initialString);
    while (command !== "Travel"){
        
        let [action, firstParam, lastParam] = command.split(":")
        let startIndex;
        let lastIndex

        switch (action) {
            case "Add Stop":
                startIndex = Number(firstParam)

                if (startIndex < 0 || startIndex >= initialString.length){
                    console.log(initialString);
                    break;
                }
                let value = lastParam

                let firstPart = initialString.slice(0, startIndex)
                let secondPart = initialString.slice(startIndex)

                initialString = firstPart + value + secondPart
                console.log(initialString);
                break;

                case "Remove Stop":
                    startIndex = Number(firstParam)
                    lastIndex = Number(lastParam)

                    if(!initialString[startIndex] || !initialString[lastIndex]){
                        console.log(initialString);
                        break;
                    }

                break;
        

        }
        command = input.shift()
    }
}

worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])