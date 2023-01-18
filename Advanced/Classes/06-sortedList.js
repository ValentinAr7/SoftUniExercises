class List {
    constructor() {
        this.items = []
    }

    add(element) {
        let index = 0;
        // Find the correct position of the element in the array
        if (index < this.items.length && this.items[index] < element) {
            throw new Error('Invalid input')
        }
        // Use splice method to add the element in the correct position
        this.items.splice(index, 0, element)
        return this
    }

    remove(index) {
        // Check if the index is valid
        if (index >= 0 && index < this.items.length) {
            // Use splice method to remove the element at the given index

            this.items.splice(index, 1);
        }
        return this;
    }

    get(index) {
        // Check if the index is valid
        if (index >= 0 && index < this.items.length) {
            // Return the element at the given index
            return this.items[index];
        }
    }

    get size() {
        return this.items.length;
    }

}


let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1); console.log(list.get(1));