function imitationGame (input){

    let encryptedMessage = input.shift()

    let index = 0
    let line = input[index]
    index++

    let lineArguments = line.split("|")
    let command = lineArguments[0]
    console.log(lineArguments);

    while(line !== "Decode"){


        let line = input[index]
        index++

    }



}

imitationGame([

    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3', 
    'Decode'
   
    ])