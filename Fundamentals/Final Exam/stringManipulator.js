function stringManipulator(input){

    let string = input.shift()

    let line = input.shift()

    while(line !== 'End'){
        
        let splitLine = line.split(" ")
        let command = splitLine[0]
        let index1 = splitLine[1]
        let index2 = splitLine[2]

        

        switch (command) {
            case 'Translate':
                for(let i = 0; i < string.length; i++){
                if(string.includes(index1)){
                    string = string.replace(index1, index2)
                }
            }
            console.log(string);
                break;

        
            case 'Includes':
                if(string.includes(index1)){
                    console.log("True");
                } else{
                    console.log("False");
                }
                break;


            case "Start":
                if(string.startsWith(index1)){
                    console.log('True');
                } else {
                    console.log('False');
                }
            break;
        }

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