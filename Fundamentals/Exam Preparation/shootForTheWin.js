function shootWin (array){

    let shotTargets = array.shift().split(" ").map(Number)
    console.log(shotTargets);

    let targetIndex = array.pop()

    array = array.map(Number)
    console.log(array);

    
}

shootWin (["24 50 36 70",
        "0",
        "4",
        "3",
        "1",
        "End"])

