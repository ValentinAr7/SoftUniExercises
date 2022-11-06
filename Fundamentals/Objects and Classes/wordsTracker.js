function wordsTracker (input){

    let words = input.shift().split(" ")

    let result = {}

    for (const word of words) {
        result[word] = 0
    }
    
    for (const word of input) {
        
    }
}

wordsTracker([
                    'this sentence',

                    'In', 'this', 'sentence', 'you', 'have',
                    'to', 'count', 'the', 'occurrences', 'of',
                    'the', 'words', 'this', 'and', 'sentence',
                    'because', 'this', 'is', 'your', 'task'
    
    ])