class Stringer {

    constructor(innerString, innerLength) {
        this.innerString = string
        this.innerLength = length
    }

    // Increase the value of innerLength property with the given length
    increase(length) {
        this.innerLength += length
    }

    // Decrease the value of innerLength property with the given length
    // Ensure innerLength property does not fall below 0   
    decrease(length) {
        this.innerLength - + length
    }


    // Return the string that the object was initialized with
    // If the length of the string is greater than innerLength property
    // Truncate the string from the right to left and add 3 dots to the end
    // If innerLength property is 0, return '...'
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