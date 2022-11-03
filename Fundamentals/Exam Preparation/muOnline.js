function mu(str) {

    let array = str.shift().split("|")

    let health = 0
    let bitcoins = 0

    for (const element of array) {
        let line = element.split(" ")
        let command = line[0]
        let num = Number(line[1])

        if (health >= 100 ) {
            health === 100
        } 

        if (health <=0 ){
            health === 0 
        }


        if (command == "potion") {
            health += num
            console.log(`You healed for ${num} hp`);
            console.log(`Current health: ${health} hp`);


        } else if (command == "chest") {
            bitcoins += num
            console.log(`You found ${num} bitcoins.`);


        } else {
            health -= num

            if (health <= 0){
                console.log(`You slayed ${command}.`);
            } else { 
                console.log(`You died! Killed by ${command}.`);
            }
        }

    }


}
// mu(["potion 10|chest 100"])
mu (["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])