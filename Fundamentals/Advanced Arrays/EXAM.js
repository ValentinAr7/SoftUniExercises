function exam (array){

    let experianceNeeded = array.shift()
    let countBattles = array.shift()

    let totalExperiance = 0
    
    for(let i = 0; i <= array.length; i++){
        let currentBattle = array[i]

        totalExperiance += currentBattle

        if(i % 3 == 0)(
            totalExperiance += (currentBattle * 15) / 100
        ) 
    }

    console.log(totalExperiance);

}

exam ([500, 5, 
    
    50, 100, 200, 100, 30])