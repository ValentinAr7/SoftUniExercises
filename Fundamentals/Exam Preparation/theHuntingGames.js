function arrayModifier (array){

    let arrayNumbers = array.shift()
    let currentLine = array.splice()


    while (currentLine !== "end") {

    for(let i = 0; i < array.length; i++){
        let currentLine = array[i]
        let lineSymbols = currentLine.split(" ")


        let command = lineSymbols[0]
        let num1 = Number(currentLine[1])
        let num2 = Number(currentLine[2])
    





    switch (command) {
        case "swap":
            arrayNumbers.splice(num1, num2)
            break;

    }


        break;
    }
    
}


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