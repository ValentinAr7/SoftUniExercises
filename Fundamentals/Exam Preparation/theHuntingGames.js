function arrayModifier (array){

    let arrayNumbers = array.shift().split(" ").map(Number)

    while (array != "end"){

        let commandLine = array.shift().split(" ")
        let command = commandLine[0]
        let index1 = commandLine[1]
        let index2 = commandLine[2]

        if(command == "swap"){
            
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