function dictionary (input){

    let dictionary = input.shift().split("|")
    let dic = {}
    
    
    for(let i = 0; i < dictionary.length; i++){
        let currentDefinition = dictionary[i]

        let splitDefinition = currentDefinition.split(":")
        let word = splitDefinition[0]
        let definition = splitDefinition[1]
    

    }
    let examWords = input.shift().split("|")
    console.log(examWords);

    let command = input.shift()
    if(command == 'Test'){
         
    }
}

dictionary 
(['care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin',
'care | kitchen | flower',
'Test'])