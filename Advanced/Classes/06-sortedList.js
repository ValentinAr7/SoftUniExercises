class List{
constructor (){
    this.items = []
}

    add(element){
        let index = 0;
        if(index < this.items.length && this.items[index] < element){
            throw new Error ('Invalid input')
        } 
        this.items.splice(index, 0, element)
    }

}
let newArray = []

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1); console.log(list.get(1));