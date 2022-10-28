function stValentines(input){

    let neiberhood = input.shift().split("@").map(Number)
    let cupid = 0

    while(input[0] != "Love!"){
        let line = input.shift().split(" ")
        let command = input[0]
        let jumps = Number(input[1])

        cupid += jumps

        if(cupid>= neiberhood.length){
            cupid = 0
        }

            if(neiberhood[cupid] == 0){
                console.log(`Place ${neiberhood[i]} already had Valentine's day.`);
            }
        

        }
    }

}

stValentines (["10@10@10@2",
                "Jump 1",
                "Jump 2",
                "Love!"])