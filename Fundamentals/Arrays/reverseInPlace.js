function reversePlace (input){
for(let i = 0; i < input.length / 2; i++){ // increment and divide the array by 2
let tempElement = input[i];                 

input[i] = input[input.length - 1 - i]; 
// last element - 1 - i (where "i" incremented every time)
// 5 - 1 - 0
// 5 - 1 - 1
// 5 - 1 - 2 etc....
//put last item on first items's place
// 0 = 0(array length - 1 - i) (increment 0 and i)

input[input.length - 1 - i] = tempElement 
// put first item on last item's place

}
console.log(input.join(''));
}
reversePlace['a', 'b', 'c', 'd', 'e']