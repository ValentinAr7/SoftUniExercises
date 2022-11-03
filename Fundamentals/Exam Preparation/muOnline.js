function mu (str){

    let array = str.shift().split("|")

    for (const element of array) {
        let line = element.split(" ")
        let command = line[0]
        let num = line[1]
        console.log(command);
    }


}

mu (["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])