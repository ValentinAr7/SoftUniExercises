const { expect } = require('chai');
const { isSymmetric } = require('/symmetry');

describe('Symmetry Checker', () => {
    it('works with symetric numeric arrays', () => {
        expect(isSymmetric([1, 2, 2, 1]).to.be.true)
    })

    it('returns fals for non-numeric arrays', () => {
        expect(isSymmetric([1, 2, 3]).to.be.false)
    })

    it('returns false for non-array', () => {
        expect(isSymmetric(5).to.be.false)
    })
})