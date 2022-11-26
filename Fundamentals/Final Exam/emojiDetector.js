function emojiDetector (input){

    let text = input.shift()

    let threshold = 1;
    let digitResults = text.matchAll(/\d/g)
     
    for (const digitResult of digitResults) {
        let digit = Number(digitResult[0])
        threshold *= digit
    }

    let emojiMatches = text.matchAll(/\(:{2}|\*{2})(<name>[A-Z][a-z]){2,}\1/g)
    for (const emojiMatch of emojiMatches) {
        console.log(emojiMatch[0]);
        console.log(emojiMatch.group.name);        
    }
}

emojiDetector[("In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**")]