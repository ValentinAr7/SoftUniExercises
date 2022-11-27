function pirates (input){

    let command = input.shift()
    let cities = {}
    let array = []

    while(command !== "Sail"){
        let splitCommand = command.split("||")

        let city = splitCommand[0]
        let population = Number(splitCommand[1])
        let gold = Number(splitCommand[2])

        let result = array.find((x) => x.city === city)
        // check if array contains repeating cities

        let index = array.indexOf(result)
        // find the index of the repeating city

        if(result){
            array[index].population += population
            array[index].gold += gold
        //if the city repeat add up the gold and population
        } else {
            cities = {city, population, gold}
            array.push(cities)
        //else - make an object with the 3 elements
        }
        command = input.shift()
    }

    while(input[0] == "End"){
        let command = input.shift().split("=>")
        let currentCommand = command.shift()

        switch (currentCommand) {
            case "Plunder":
                let cityName = command[0]
                let people = command[1]
                let gold = command[2]

                console.log(`City ${cityName} plundered! ${gold} stolen, ${people} citizents killeds`);
                
                let result = array.find((x)=> x.city === cityName)
                let index = array.indexOf(result)

                array[index].population -= population
                array[index].gold -= gold

                if(array[index].population <= 0 || array[index].gold <= 0){
                    console.log(`${cityName} has been wiped off the map`);
                }
                break;
        
            case "Prosper":

                let town = command[0]
                let treasure = command[1]

                if(treasure < 0){
                    console.log("Gold added cannot be a negative number");
                } else {
                    let result = array.find((x)=> x.city === cityName)
                    let index = array.indexOf(result)

                    array[index].gold += treasure
                    console.log(`${treasure} added to the city treasury. ${town} has added ${array[index].gold} gold`);
                }
                break;
        }
    }
    
}

pirates (["Tortuga||345000||1250",

"Santo Domingo||240000||630",
"Tortuga||410000||1100", 
"Tortuga||410000||1100",         //Havana
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"])