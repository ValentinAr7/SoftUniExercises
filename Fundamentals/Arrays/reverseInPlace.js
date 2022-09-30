function reversePlace (array){


for(let i = 0; i < array.length / 2; i++){
let tempElement = array[i];

array[i] = array[array.length - 1 - i];
input[array.length - 1 - i] = tempElement 
}

console.log(array.join(""));

}
reversePlace['a', 'b', 'c', 'd', 'e']