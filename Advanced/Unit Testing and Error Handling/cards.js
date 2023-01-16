function cards (face, suit){

    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
    }
    
    const result = {
        face,
        suit: suits[suit],
        toString(){
            return this.face + this.suit
        }
    }

return result
} 

console.log(cards('A', 'S').toString())
console.log(cards ('10', 'H').toString())
console.log(cards ('1', 'C').toString())