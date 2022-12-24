function sortingNums(input) {

let result = []

let orderNumbers = input.sort((a,b) => a- b )
let halfArray = input.splice(0, input.length / 2)

console.log(halfArray);
console.log(input);

}

sortingNums ([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])