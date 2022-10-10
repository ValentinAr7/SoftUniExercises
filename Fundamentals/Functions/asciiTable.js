function asciitable (firstChar, secondChar){

    let startRange = firstChar.charCodeAt()
        let endRange = secondChar.charCodeAt()
    

        for(let i = startRange; i < endRange; i++){
            console.log(i);
        }

}

asciitable(":", "%")