function wordsTracker (input){


    let words = input.shift().split(" ")
    //take the first string, store it in the avriable and split it.

    let result = {}

    for (const word of words) {
        result[word] = 0
    }
    //take the words from the variable "words" and give them a value = 0 and store them in result
    //now every time a word appears in the array, the value will increase +1
    
    for (const word of input) {
        if(result.hasOwnProperty(word)){
            result[word]++
        }
    }
    //take the words from the input array
    //check if the words from "results" appear in the "input" array
    //if words appear - increase the value 

    
     const sorted = Object.entries(result).sort((a,b)=> a[1] - b[1])
    //object.entries returns array of arrays (matrix)
    // it will return ["this", 3] and so on with every other word
    //then sort the arrays by the second element (index[1])

     for (const kvp of sorted) {
        console.log(`${kvp[0]} - ${kvp[1]}`);
     }
     //print the result in the following format ----     sentance - 2
}

wordsTracker([
                    'this sentence',

                    'In', 'this', 'sentence', 'you', 'have',
                    'to', 'count', 'the', 'occurrences', 'of',
                    'the', 'words', 'this', 'and', 'sentence',
                    'because', 'this', 'is', 'your', 'task'
    
    ])