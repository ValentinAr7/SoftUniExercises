function pirates (input){

    let command = input.shift()
    let cities = {}
    let array = []

    while(command !== "Sail"){
        let splitCommand = command.split("||")

        let city = splitCommand[0]
        let population = Number(splitCommand[1])
        let gold = Number(splitCommand[2])

        let result = array.find((x)=>x.city === city)
        let index = result.indexOf(result)

        if(result == true){
            array[index].population += population
            array[index].gold += gold
        }

    
        });

        command = input.shift()
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