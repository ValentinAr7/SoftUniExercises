function firstK (numbers){

    let K = Number(numbers[0])

    let firstHalf = numbers.slice(1, K + 1)
    console.log(firstHalf.join(" "));

    let secondHalf = numbers.slice(numbers.length - K)
    console.log(secondHalf.join(" "));

   


}

firstK ([3 ,
         6, 7, 8, 9])