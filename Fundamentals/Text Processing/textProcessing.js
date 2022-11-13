function textProcessing (words, text){

    let wordsArray = words.shift().split(", ")

    for(let i = 0; i < wordsArray.length; i++){
        let currentWord = wordsArray[i]
        console.log(currentWord);
    }

}
textProcessing(['great, learning',

'softuni is ***** place for ******** new programming languages'])