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

            case 'Lowercase':
                string = string.toLowerCase()
                console.log(string);
            break;

            case 'FindIndex':
                let lastOcc = string.lastIndexOf(index1)
                console.log(lastOcc);
            break;

            case 'Remove':
                string = [...string]; string.splice(index1, index2); string = string.join("")
                console.log(string);
                // let firstPart = string.substring(0, index1)
                // let secondPart = string.substring(index2,)
                // let finalPart = firstPart + secondPart
                // console.log(finalPart);
            break;

        }

        line = input.shift()
    }

}

stringManipulator (['*S0ftUni is the B3St Plac3**',
    'Translate 2 o',
    'Includes best',
    'Start the',
    'Lowercase',
    'FindIndex p',
    'Remove 2 7',
])