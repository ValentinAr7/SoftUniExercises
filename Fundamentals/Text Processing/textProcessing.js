function textProcessing (words, text){

    let wordsArray = words.shift().split(", ")

    wordsArray.forEach(word => {
        const match = "*".repeat(word.length)
        text = text.replace(match, word)
    });

}
textProcessing(['great, learning',

'softuni is ***** place for ******** new programming languages'])