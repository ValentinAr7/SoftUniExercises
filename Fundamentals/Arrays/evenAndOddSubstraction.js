function evenOddSubstraction(numbers) {
    let sumEven = 0;
    let sumOdd = 0;
    let totalSum = 0

    for (let number of numbers) {
        let numberInt = Number(number)
        if (numberInt % 2 == 0) {
            sumEven += numberInt
        } else {
            sumOdd += numberInt
        }
    }

    totalSum = sumEven - sumOdd
    console.log(totalSum);
}

evenOddSubstraction[1, 2, 3, 4, 5, 6]