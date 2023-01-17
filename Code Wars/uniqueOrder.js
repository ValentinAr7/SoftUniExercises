var uniqueInOrder = function (iterable) {

    let result = []

    //check if previouse and next characters match the current one
    for (let i = 0; i < iterable.length; i++) {
        let currentLetter = iterable[i]
        let nextChar = iterable[i + 1]

        
        if (currentLetter !== nextChar) {

            //check if result includes the current letter
            if (!result.includes(currentLetter)) {
            }
            //if result does not include current letter then push it
            result.push(currentLetter)
        }
    }
    return result
}

uniqueInOrder('AAAABBBCCDAABBB')

//Test
describe("Tests", () => {
    it("test", () => {
        assert.deepEqual(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B'])
    });
});
