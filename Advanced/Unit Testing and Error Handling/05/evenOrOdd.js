function isOddOrEven(string) {

    if (typeof (string) !== 'string') {
        return undefined;
    }

    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}


describe('is odd or even tests', () => {
    it('should be undefined if number', () => {
        expect(isOddOrEven(2)).to.be.undefined;
    })

    it('should be undefined if object', () => {
        expect(isOddOrEven({})).to.be.undefined;
    })

    it('should return odd if string length is odd', () => {
        expect(isOddOrEven('Hi!')).to.equal('odd');
    })

    it('should return even if string is even', () => {
        expect(isOddOrEven('hell')).to.equal('even')
    })


})