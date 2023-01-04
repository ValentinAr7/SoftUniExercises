function firstLast(inpuut){


    let input = inpuut.map(Number)

    let firstNum = input.shift()
    let lastNum = input.pop()

    let result = firstNum + lastNum
    console.log(result);

}

firstLast (['20', '30', '40', '80'])