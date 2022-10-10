function asciitable (firstChar, secondChar){

let string1 = "";

    let startRange = firstChar.charCodeAt()
        let endRange = secondChar.charCodeAt()
    

        for(let i = startRange; i < endRange; i++){
            console.log(String.fromCharCode(i));
            string1 += `${i} `
        }

}

asciitable(":", "%")