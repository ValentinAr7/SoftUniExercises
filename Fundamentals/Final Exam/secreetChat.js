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
                
                break;
        
            case 'Reverse':
            
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