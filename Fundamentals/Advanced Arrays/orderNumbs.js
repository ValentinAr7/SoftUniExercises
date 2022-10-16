function orderNumbers (numbers){

    let orderInAscending = numbers.sort((a, b) =>{
        return a - b
    })

}

orderNumbers([30, 15, 50, 5])