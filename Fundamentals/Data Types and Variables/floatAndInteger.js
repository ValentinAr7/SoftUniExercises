function floatInt (num1, num2, num3){

    let sum = num1 + num2 + num3

    if(sum % 1 == 0 ){
        console.log(`${sum} - Integer`)
    } else {
        console.log(`${sum} - Float`)

    }
}

floatInt(9, 100, 1.1)