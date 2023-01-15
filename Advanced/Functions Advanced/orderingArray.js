function orderingArray (array, arg){

if(arg == 'asc'){
    newArray = array.sort((a, b) => a - b)
} else if ( arg == 'desc') {
    newArray = array.sort((a, b) => b - a)
}
console.log(newArray);
}

orderingArray([14, 7, 17, 6, 8], 'asc')

console.log("-------------------------");

orderingArray([14, 7, 17, 6, 8], 'desc')