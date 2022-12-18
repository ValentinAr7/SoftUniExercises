function stringLength (input) {

    let sum = 0
for(let i = 0; i < input.length; i++){
    sum += input[i].length
}

console.log(sum);
console.log(Math.trunc(sum / 3));

}

stringLength(['pasta', '5', '22.3'])