function thePianist (input){

    let numberOfPieces = input.shift()
    let pieces = {}

    for(let i = 0; i < numberOfPieces; i++){
        let piece = input.shift()

        let [pieceName, composer, key] = piece.split("")

        pieces[pieceName] = {
            composer: composer,
            key: key
            
        }
    }

    
    while (command !== "Stop"){
        let line = input.shift().split("|")
        let command = line[0]
        let piece = line[1]
        let index1 = line[2]
        let index2 = line[3]

        
    
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