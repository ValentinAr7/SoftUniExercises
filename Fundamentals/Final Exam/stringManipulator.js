function stringManipulator(input){

    let string = input.shift()

    let line = input.shift()

    while(line !== 'End'){
        console.log(line);

        line = input.shift()
    }

}

stringManipulator (['//Thi5 I5 MY 5trING!//',
'Translate 5 s',
'Includes string',
'Start //This',
'Lowercase',
'FindIndex i',
'Remove 0 10',
'End'
])