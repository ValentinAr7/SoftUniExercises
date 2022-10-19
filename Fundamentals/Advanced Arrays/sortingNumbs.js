function sortingNumbs (numbers){

    let sortedArray = numbers.sort((a,b) => a-b);
let resultArray = []
    for(let i = 0; i < numbers.length; i++){
        
        let firstElement = sortedArray.pop();
        let lastElement = sortedArray.shift();
        resultArray.push(firstElement)
        resultArray.push(lastElement)
    }
    resultArray.push(sortedArray.pop())
    resultArray.push(sortedArray.shift())

    console.log(resultArray.join(" "));
    
}
sortingNumbs ([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])