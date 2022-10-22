function pirates (array){

    let daysOfPlunder = Number(array[0])
    let dailyPlunder = Number(array[1]);
    let expectedPlunder = Number(array[2])
    

    let totalPlunder = daysOfPlunder * dailyPlunder
    console.log(totalPlunder);    

}

pirates(["5", "40", "100" ])