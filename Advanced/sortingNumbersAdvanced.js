function sortingNums(input) {

let result = []

let orderNumbers = input.sort((a,b) => a- b )
let halfArray = input.splice(0, input.length / 2)

for(let i = 0; i <= halfArray.length; i++){
    result.push(halfArray[i])

    for(let i =0; i < input.length; i++){
        result.push(input[i])
    }
}

console.log(result);



console.log(halfArray);
console.log(input);

}

sortingNums ([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])