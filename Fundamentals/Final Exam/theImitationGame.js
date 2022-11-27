function imitationGame (input){

        let encryptedMessage = input.shift()

        let command = input.shift()

        while(command !== "Decode"){
            let line = command.split("|")
            let operation = line[0]
            let index1;
            let index2;

            switch (operation) {
                case "ChangeAll":
                    index1 = line[1]
                    index2 = line[2]

                    for(let i = 0; i < encryptedMessage.length; i++){
                        if(encryptedMessage.includes(index1)){
                            encryptedMessage = encryptedMessage.replace(index1, index2)
                        }
                    }
                    console.log(encryptedMessage);
                    break;

                case "Insert":
                    index1 = line[1]
                    index2 = line[2]

                    let firstPart = encryptedMessage.slice(0, index1)
                    let secondPart = encryptedMessage.slice(index1)
                    let message = firstPart + index2 + secondPart
                    console.log(message);
                    break;
            
                default:
                    break;
            }

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