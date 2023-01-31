const { expect } = require ('chai');
const { chooseYourCar } = require('./03.Choose_Your_Car_Resources')


describe("Tests",() => {
    describe("choosingType", function() {
        it("happy path", function() {
            expect(chooseYourCar.choosingType('Sedan', 'Yellow' , 1999).to.equal('Perfect'))
        });
     });
     // TODO: …
});
