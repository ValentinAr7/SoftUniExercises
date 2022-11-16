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
            encryptedMessage.forEach(element =>{
                if(element == arg1){
                    element.replace(arg1, arg2)
                    console.log(encryptedMessage);
                }
                
            });
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