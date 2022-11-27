function pirates (input){

    let command = input.shift()
    

    while(command !== "Sail"){
        let splitCommand = command.split("||")
        
        let cities = splitCommand[0]
        let population = splitCommand[1]
        let gold = splitCommand[2]
        console.log(cities);

        for(let i = 0; i < cities; i++){
            console.log(cities);
        }

        command = input.shift()
    }

}

pirates (["Tortuga||345000||1250",

"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"])