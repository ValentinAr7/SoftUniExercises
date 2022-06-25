function marinControl (input){

let minutes = Number(input[0]);
let seconds = Number(input[1]);
let lenght = Number(input[2]);
let secondsFor100 = Number(input[3]);

let timeInSeconds = minutes * 60 + seconds

let loseTime = lenght / 120
let totalLoseTime = loseTime * 2.5

let MarinTime = (lenght / 100) * secondsFor100 - totalLoseTime

if(MarinTime < timeInSeconds){
    console.log("Marin Bangiev won an Olympic quota!");
    console.log(`His time is ${(MarinTime).toFixed(3)}.`);
} else {
    console.log(`No, Marin failed! He was ${(MarinTime - timeInSeconds).toFixed(3)} second slower.`)
}
 
}

marinControl (["2",

"12",

"1200",

"10"])