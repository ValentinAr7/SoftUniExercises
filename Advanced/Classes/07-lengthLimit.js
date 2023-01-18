class Stringer {

    constructor(innerString, innerLength) {
        this.innerString = string
        this.innerLength = length
    }

    //method to increase the length of the string
    increase(length) {
        this.innerLength += length
    }

    //method to decrease the length of the strring
    decrease(length) {
        this.innerLength - + length
    }


    toString() {
        if (this.innerLength < 0) {
            return '...'
        }

        if (this.innerString > this.innerLength) {
            this.innerString.splice(0, this.innerLength) + '...'
        }
        return this.innerString
    }

}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // Test