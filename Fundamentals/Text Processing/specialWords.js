function specialWords (string){

    let arrayString = string.split(" ")
    
    arrayString.forEach(word => {
        // method 
        // word.startsWith("#")
        if(word[0] == "#" && word.length > 1){
            let isLetter = true
            let temp = " "
           for(let i = 1; i < word.length; i++){
            const char = word[i].toLowerCase();
            if(char.charCodeAt() < 97 || char.charCodeAt() > 122 ){
                break;
            } else{
                temp+=char
            }

           }
           if (isLetter){
           console.log(temp);
        }
    }
    });

}
specialWords
('The symbol # is known #variously in English-speaking #regions as the #number sign')