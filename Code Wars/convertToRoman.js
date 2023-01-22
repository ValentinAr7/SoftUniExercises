function convert(number) {

    let result = []

    const romanNumerals = {
            1000: "M",
            900: "CM",
            500: "D",
            400: "CD",
            100: "C",
            90: "XC",
            50: "L",
            40: "XL",
            10: "X",
            9: "IX",
            5: "V",
            4: "IV",
            1: "I"
    }


    for (let key in romanNumerals) {

        if(number >= key){
            result.push(romanNumerals[key])
            number -= key
        }

      }


    console.log(result);
    console.log(number);
}


convert(1000)





// if(num > 1000){
//     result.push('M')
//     num -= 1000
// } else if (num > 500){
//     result.push('D')
//     num-=500
// } else if (num > 100){
//     result.push('C')
//     num-=100
// } else if (num > 50){
//     result.push('L')
//     num-=50
// }
// else if (num > 10){
//     result.push('X')
//     num -= 10
// } else if (num > 5){
//     result.push('V')
//     num-=5
// } else {
//     result.push('I')
//     num-=1
// }
