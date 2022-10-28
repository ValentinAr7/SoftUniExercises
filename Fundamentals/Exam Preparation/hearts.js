function stValentines(input){

    let neiberhood = input.shift().split("@").map(Number)

    while(input != "Love!"){
        let line = input.shift().split(" ")
        let command = input[0]
        let jumps = input[1]

        for(let i = 0; i < neiberhood.length; i++){
            let currentIndex = neiberhood[i]
            let cupid = 0
            if(command = "Jump"){
                currentIndex -= 2
                console.log(neiberhood);
            }
        }
    }
}

stValentines (["10@10@10@2",
                "Jump 1",
                "Jump 2",
                "Love!"])