function mu (str){

    let array = str.shift().split("|")

    for (const element of array) {
        let line = element.split(" ")
        console.log(line);
    }


}

mu (["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])