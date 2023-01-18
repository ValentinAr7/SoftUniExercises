class List{
constructor (){
    this.items = []
}

    add(element){
        let index = 0;
        //if element is outside the range throw an error
        if(index < this.items.length && this.items[index] < element){
            throw new Error ('Invalid input')
        } 
        //replace index with element
        this.items.splice(index, 0, element)
        return this
    }

    remove(index) {
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1);
        }
        return this;
    }

    get(index) {
        if (index >= 0 && index < this.items.length) {
            return this.items[index];
        }
    }

    get size() {
        return this.items.length;
    }

}
let newArray = []

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1); console.log(list.get(1));