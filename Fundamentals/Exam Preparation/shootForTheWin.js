function shootWin (array){

    let shotTargets = array.shift().split(" ").map(Number)

    let targetIndex = array.pop()

    let shooting = array.map(Number)

    for(let i = 0; i < shooting.length; i++){
        let currentShot = shooting[i]
        let currentTarget = shotTargets[currentShot]

        if(currentTarget > 0){
            shotTargets[currentShot] = -1

        for(let j =0; j < shotTargets.length; j++){
            if(shotTargets[j] > -1){
                if(shotTargets[j] > currentTarget){
                    shotTargets[j] -= currentTarget
                } else {
                    shotTargets[j] += currentTarget
                }
            }
        }
    }

            }
            console.log(shotTargets);
            console.log(shooting);
}

shootWin (["24 50 36 70",
        "0",
        "4",
        "3",
        "1",
        "End"])

