function deck(cardss) {
    let result = [];

    for (let card of cardss) {
        let face = card.slice(0, -1);
        let suit = card.slice(-1)

        try {
            const crd = cards(face, suit)
            result.push(crd)
        } catch (err) {
            result = ['Invalid card ' + card]
        }
    }

    console.log(result.join(' '));
    function cards(face, suit) {

        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        if (faces.indexOf(face) == -1) {
            throw new Error('Invalid face: ' + face)
        }

        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',
        }

        const result = {
            face,
            suit: suits[suit],
            toString() {
                return this.face + this.suit
            }
        }

        return result
    }

}

deck(['AS', '10D', 'KH', '2C'])
deck(['5S', '3D', 'QD', '1C'])