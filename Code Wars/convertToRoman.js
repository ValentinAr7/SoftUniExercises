function convert(num) {

    let result = []

    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }


    for(key in romanNumerals){
        let values = romanNumerals[key]
        while(num != 0){
        if(num > 1000){
            result.push('M')
            num -= 1000
        } else if (num > 500){
            result.push('D')
            num-=500
        } else if (num > 100){
            result.push('C')
            num-=100
        } else if (num > 50){
            result.push('L')
            num-=50
        }
        else if (num > 10){
            result.push('X')
            num -= 10
        } else if (num > 5){
            result.push('V')
            num-=5
        } else {
            result.push('I')
            num-=1
        }
    }
}


    console.log(result);
    console.log(num);

}

convert(1872)