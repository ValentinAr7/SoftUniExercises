function letters(input){

let word = input [0];
let total = 0;
for(let i = 0; i < word.length; i++){
    let ch = word[i];
    switch(ch){
        case "a": total += 1; break;
        case "e": total += 2; break;
        case "i": total += 3; break;
        case "o": total += 4; break;
        case "u": total += 5; break;
        case "m": total +=6; break
        }
        }
        console.log(total);


}

letters(["bamboo"])