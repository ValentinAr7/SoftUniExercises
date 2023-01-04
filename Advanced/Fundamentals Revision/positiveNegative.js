function positiveNegative (input){

let sorted = input.sort((a, b) => a - b)

console.log(sorted.join("\n"));

}

positiveNegative([3, -2, 0, -1])