function imitationGame (input){

    let encryptedMessage = input.shift()

    let index = 0
    let line = input[index]
    index++

    let lineArguments = line.split("|")
    let command = lineArguments[0]
    let arg1 = lineArguments[1]
    let arg2 = lineArguments[2]


    switch (command) {
        case "ChangeAll":
for (const element of encryptedMessage) {
    if(element === arg1){
        encryptedMessage = encryptedMessage.replace(arg1, arg2)
    }
}
console.log(encryptedMessage);


    case "Insert": 
    // Insert {index} {value}
    // Inserts the given value before the given index in the string.
    // 'Insert|2|o',
    let encrypted = encryptedMessage
    encryptedMessage.substr(arg1) + arg2 
    console.log(encryptedMessage);


            break;
    



        default:
            break;
    }

    // while(line !== "Decode"){


    //     let line = input[index]
    //     index++

    // }
}

imitationGame([

    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3', 
    'Decode'
   
    ])