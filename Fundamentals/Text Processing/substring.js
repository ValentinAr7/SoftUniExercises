function substring (word, text){

    let txt = text.split(" ")
    let textSmallCaps = text.toLowerCase()
    
    const result = txt.forEach(element => {
        if(element.toLowerCase() === word.toLowerCase()){
    return console.log(result); 
        } 

        console.log(`${word} not found`);
    });
}

substring('javascript',

'JavaScript is the best programming language')