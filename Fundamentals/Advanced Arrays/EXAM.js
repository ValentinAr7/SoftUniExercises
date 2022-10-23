function exam (array){

    let experianceNeeded = array.shift()
    let countBattles = array.shift()

    array.unshift(0)


    let totalExperiance = 0
    
    for(let i = 0; i < array.length; i++){
        let currentBattle = array[i] 


        totalExperiance += currentBattle

        if(i % 3 == 0)(
            totalExperiance += currentBattle * 0.15
        ) 

        if(i % 5 == 0)(
            totalExperiance -= (currentBattle * 10) / 100
        )

    }

    if(totalExperiance > experianceNeeded){
     console.log(`Player successfully collected his needed experience for ${countBattles} battles.`);
        } else {
            console.log(`Player was not able to collect the needed experience, ${(experianceNeeded - totalExperiance).toFixed(2)} more needed.`);
        }
}

exam ([500, 5, 
    
    50, 100, 200, 100, 30])