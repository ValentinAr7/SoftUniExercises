function mu (str){

    let array = str.shift().split("|")

    let health = 0
    let bitcoins = 0

    for (const element of array) {
        let line = element.split(" ")
        let command = line[0]
        let num = Number(line[1])
        console.log(command);

        switch (command) {
            case "potion":
                health += num
                console.log(`You healed for ${num} hp`);
                console.log(`Current health: ${health} hp`);
               if(health = 100){
                health === 100
               }
                break;
        
        }
    }


}
mu (["potion 10"])
// mu (["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])