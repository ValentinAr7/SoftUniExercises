function thePianist (input){

    let numberOfPieces = Number(input.shift())
    let store = {}

    for(let i = 0; i < numberOfPieces; i++){
        
        let [piece, composer, key] = input.shift().split("|")

        if(!store.hasOwnProperty(piece)){
            store[piece] = {}
        }
        store[piece] [composer]= key 
    }
    console.table(store);

    let line = input.shift().split("|")

    while (line !== "Stop"){
        let command = line[0]
        let piece = line[1]
        let composer = line[2]
        let key = line[3]

        switch (command) {
            case "Add":
            if(store.hasOwnProperty(piece)){
                console.log(`${piece} is already in the collection!`);
                break;

            store[piece] = {}
            store[piece][composer] = key
            }
                // store[pieceName].piece.push()
                // console.log(pieceName);
                // break;
        
            default:
                break;
        }
    
    }


   
}

thePianist (
    [
        '3',
        
        'Fur Elise|Beethoven|A Minor',
        
        'Moonlight Sonata|Beethoven|C# Minor',
        
        'Clair de Lune|Debussy|C# Minor',
        
        'Add|Sonata No.2|Chopin|B Minor',
        
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        
        'Add|Fur Elise|Beethoven|C# Minor',
        
        'Remove|Clair de Lune',
        
        'ChangeKey|Moonlight Sonata|C# Major',
        
        'Stop'
        
        ]
)


//https://softuni.bg/trainings/resources/video/74225/video-27-july-2022-todor-stoyanov-programming-fundamentals-with-javascript-may-2022/3732