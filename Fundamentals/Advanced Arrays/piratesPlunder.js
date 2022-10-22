function pirates (array){

    let daysOfPlunder = Number(array[0])
    let dailyPlunder = Number(array[1]);
    let expectedPlunder = Number(array[2])
    
    let totalPlunder = 0

    for(let i = 1; i <= daysOfPlunder; i++){
        totalPlunder += dailyPlunder
        if(i % 3 == 0)(
            totalPlunder += dailyPlunder / 2
        ) 

        
    }
    
}

pirates([
    "5", "40", "100" ])