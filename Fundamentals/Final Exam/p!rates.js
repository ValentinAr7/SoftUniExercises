function pirates (input){

    let command = input.shift()
    let cities = {}
    let array = []

    while(command !== "Sail"){
        let splitCommand = command.split("||")

        let city = splitCommand[0]
        let population = splitCommand[1]
        let gold = splitCommand[2]

        let result = array.find((x)=>x.cities === city)

    
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