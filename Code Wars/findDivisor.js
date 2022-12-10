function divisors(integer) {

    let result = []
    let primeNumber = 0
    let isPrime = true

    for (let i = 2; i < integer; i++) {
        let currentNumber = i
        if (integer % i == 0) {
            result.push(i)
        }

        if (integer % i == 0) {
            isPrime = false;
        }
    }

    if(isPrime){
        return `${integer} is prime`
    } else {
       return result
    }

    };
    divisors(13)