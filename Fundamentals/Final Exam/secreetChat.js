function secretChat (input){

    let message = input.shift()

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
                    
                    message = message.slice(index1,)
                    
                }
                break;

            case 'InsertSpace':

            break;
        }
        line = input.shift()
    }


}
secretChat (["heVVodar!gniV",

        'ChangeAll:|:V:|:l',
        'Reverse:|:!gnil',
        'InsertSpace:|:5',
        'Reveal'
    ])