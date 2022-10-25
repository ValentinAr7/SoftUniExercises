function arrayModifier (array){

    let arrayNumbers = array.shift()

    for(let i = 0; i < array.length; i++){
        let curretnLine = array[i]
        let lineSymbols = curretnLine.split(" ")
        console.log(lineSymbols);

    }


    // while (curretnLine !== "end") {


    // }



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