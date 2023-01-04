function timeToWalk (numberOfStemps, stepSize, speedKm) {

    

    let stepsInMeters = numberOfStemps * stepSize
    let speedMetersKM = speedKm / 3.6
    let time = stepsInMeters / speedMetersKM
    let minuteBreak = Math.floor(stepsInMeters / 500)

    let timeInMin = Math.floor(time / 60)
    let timeInSec = Math.floor(time - (timeInMin * 60))
    let timeInH = Math.floor(time / 3600)

    timeInMin += minuteBreak

    console.log(`${timeInH}:${timeInMin}:${timeInSec}`);
    



}

timeToWalk (4000, 0.60, 5)