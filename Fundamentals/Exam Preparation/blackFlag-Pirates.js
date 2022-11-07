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

        if(i % 5 == 0){
           totalPlunder = (totalPlunder * 0.7) 
        }
    }
        
    
        if(totalPlunder > expectedPlunder){
            console.log(`Ahoy! ${(totalPlunder).toFixed(2)} plunder gained.`);
        } else {
            let percentage = (totalPlunder / expectedPlunder) * 100 
            console.log(`Collected only ${(percentage).toFixed(2)}% of the plunder.`)
        }
}

pirates([
    "5", "40", "100" ])