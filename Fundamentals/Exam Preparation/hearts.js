function stValentines(input){

    let neiberhood = input.shift().split("@").map(Number)
    // take the first element of the array, split and convert into numbers

    let cupid = 0
    // the cupid starts from index 0

    while(input[0] != "Love!"){
    // while the command in the array is not "Love", execute the code below

        let line = input.shift().split(" ")
        let command = line[0]
        let jumps = Number(line[1])
    // split the line into strings, (command and number(jumps))

        cupid += jumps
    // take the value in jumps and add to cupid
    // cupid starts from house[0] and jumps with the value 

        if(cupid >= neiberhood.length){
            cupid = 0
        }
    // if cupid jumps with more indexes than arrays' length, cupid goes back to index[0]

            if(neiberhood[cupid] == 0){
                console.log(`Place ${neiberhood[i]} already had Valentine's day.`);
    // if any of the indexes in the array is equal to 0, the neiborhood already had Valentines
            } else {
                neiberhood[cupid] -= 2
                if(neiberhood[cupid] == 0){
                    console.log(`Place ${cupid} has Valentine's day.`);
                }
    // if it is not equal to 0, substract by 2
            }
    }

    let missedHouses = 0
    

    for (let house of neiberhood) {
        if(house > 0){
            missedHouses++
        }
    }

    console.log(`Cupid's last position was ${cupid}`);


    if(missedHouses > 0){
        console.log(`Cupid has failed ${missedHouses} houses.`);
    } else{
        console.log("Mission complete");
    }
}

stValentines (["4@2@4@2",

"Jump 1",

"Jump 2",

"Jump 1",

"Jump 2",

"Jump 2",

"Jump 2",

"Love!"])