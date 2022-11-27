function imitationGame (input){

        let encryptedMessage = input.shift()

        let command = input.shift()

        while(command !== "Decode"){
            console.log(command);

            command = input.shift()
        }

}

imitationGame([

    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
    ])