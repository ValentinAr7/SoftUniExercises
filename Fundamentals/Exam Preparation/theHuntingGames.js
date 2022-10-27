function arrayModifier (array){

    let arrayNumbers = array.shift().split(" ").map(Number)
    //take the first element of the array, split the numbers, and convert them to numbers

    while (array != "end"){ // while the element in different than "end" run the code below

        let commandLine = array.shift().split(" ")      
        //take the first line of the array ('swap 1 3',) and split it


        let command = commandLine[0]            //command = the first index of the command line e.g("swap")
        let index1 = Number(commandLine[1])     // index1 = the second index of the command line
        let index2 = Number(commandLine[2])     // index2 = the third index of the command line

        switch (command) {          
            
            
            case "decrease":
                for(let i = 0; i < arrayNumbers.length; i++){
                    arrayNumbers[i]--
                }                
                break;
//          if the command = "decrease", loop through the array of Numbers and decrease
//          each element with 1
//--------------------------------------------------------------------------------------------------
            case "swap":

                let temp = index1
                arrayNumbers[index1] =arrayNumbers[index2]
                arrayNumbers[index2] = temp
            break
//          if the command = swap, swap the number on index1 with the number on index 2 
//-----------------------------------------------------------------------------------------------------
            case "multiply":
                arrayNumbers[index1] *= arrayNumbers[index2]
            break
//          if the command
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