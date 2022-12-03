function secretChat (input){

    let message = input.shift()

    let line = input.shift()
    while(line !== 'Reveal'){
        let splitLine = line.split(':|:')
        line = input.shift()
    }


}
secretChat (["heVVodar!gniV",
        'ChangeAll:|:V:|:l',
        'Reverse:|:!gnil',
        'InsertSpace:|:5',
        'Reveal'
    ])