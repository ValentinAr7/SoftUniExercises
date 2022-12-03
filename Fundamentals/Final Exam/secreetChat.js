function secretChat (input){

    let message = input.shift()
    let newMessage = ""

    let line = input.shift()
    
    while(line !== 'Reveal'){
        let splitLine = line.split(':|:')
        let command = splitLine[0]
        let index1 = splitLine [1]
        let index2 = splitLine [2]

        switch (command) {
            case 'ChangeAll':
                input.forEach(element => {
                    if(element = index1){
                        message = message.replace(index1, index2)
                    }
                });
                console.log(message);
                break;
        
            case 'Reverse':
                if(message.includes(index1)){
                    let subStr = message.indexOf(index1)
                    let subMessage = message.slice(subStr,)
                    message = message.replace(index1, "")

                    let splitString = subMessage.split("")
                    let reversedString = splitString.reverse()
                    newMessage = message + reversedString.join("")
                    console.log(newMessage);
                } else{
                    console.log("error");
                }
                break;

            case 'InsertSpace':

                let subStr = newMessage.substring(0, index1)
                let subStr2 = newMessage.substring(index1,)
                

                newMessage = subStr + " " + subStr2
                console.log(newMessage);

            break;
        }
        line = input.shift()
    }
    console.log(`You have a new text message: ${newMessage}`);

}
secretChat (["heVVodar!gniV",

        'ChangeAll:|:V:|:l',
        'Reverse:|:!gnil',
        'InsertSpace:|:5',
        'Reveal'
    ])

    secretChat ([
        'Hiware?uiy',
        'ChangeAll:|:i:|:o',
        'Reverse:|:?uoy',
        'Reverse:|:jd',
        'InsertSpace:|:3',
        'InsertSpace:|:7',
        'Reveal'
      
      ])