function arrayModifier (array){

    let arrayNumbers = array.shift().split(" ").map(Number)

    while (array != "end"){

        let commandLine = array.shift().split(" ")
        let command = commandLine[0]
        let index1 = Number(commandLine[1])
        let index2 = Number(commandLine[2])

        switch (command) {
            case "decrease":
                for(let i = 0; i < arrayNumbers.length; i++){
                    arrayNumbers[i]--
                }                
                break;

            case "swap":

                let temp = index1
                arrayNumbers[index1] =arrayNumbers[index2]
                arrayNumbers[index2] = temp
            break

            case "multiply":
                let tempNum = index1
                arrayNumbers[index1] * arrayNumbers[index2]
                arrayNumbers[index1] = tempNum
            break
        }
    }

    console.log(arrayNumbers);

}

arrayModifier ([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
    ])