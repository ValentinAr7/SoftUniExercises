function orderNumbers (numbers){

    let orderInAscending = numbers.sort((a, b) =>{      //return smalest numbers in array
        return a - b
    })

    console.log(orderInAscending.slice(0,2).join(" "));     //slice the 2 smallest numbers
}

orderNumbers([30, 15, 50, 5])