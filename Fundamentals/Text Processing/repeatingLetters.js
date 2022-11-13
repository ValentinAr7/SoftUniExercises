function repeatingLetters (string){

    let letters = string.split("")

    let result = []

    for(let i = 0; i< letters.length; i++){
        let currentLetter = letters[i]
        let prev = letters[i - 1]
    
        if(currentLetter !== prev){
result += currentLetter
        }
    }
console.log(result);
}

repeatingLetters('aaaaabbbbbcdddeeeedssaa')