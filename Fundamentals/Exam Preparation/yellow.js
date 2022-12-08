function yellow (input){

    let whiteGold = input.shift().split(" ")
    let yellowGold = input.shift().split(" ")

    let newEarings = 0
    let leftOvers = 0

    let earingFromLeftOvers = 0

    for(let i = 0; i < whiteGold.length; i++){
        let currentWhiteGold = Number(whiteGold[i])
        console.log(currentWhiteGold);

        for(let i = 0; i < yellowGold.length; i++){
            let currenntYellowGold = Number(yellowGold[i])
            let totalSum = currenntYellowGold + currentWhiteGold

            if(totalSum < 10){
            leftOvers.push(totalSum)
            }

            if(totalSum == 10){
                newEarings++

                if (totalSum > 10){
                    currenntYellowGold -= 2
                    if(totalSum == 10){
                        newEarings++
                    } else{
                        currenntYellowGold -= 2
                    }

                    if(totalSum == 10){
                        newEarings++
                    } else{
                        currenntYellowGold -= 2
                    }
                }
            }
        }

        if(leftOvers > 10){
            let numberOfEarings = leftOvers / 10
            earingFromLeftOvers.push(Math.trunc(numberOfEarings))
        }


    }

}

yellow (["5 3 2 2 4",
         "5 5 8 2 6"

    ])