function easterEggs (input){

    
    // /^([$%])(?<tag>[A-Z][a-z]{2,})\1: \[(?<one>\d+)\]\|\[(?<two>\d+)\]\|\[(?<three>\d+)\]\|$/
    let pattern = /([@#]+)(?<color>[a-z]{3,})[@#]+[\W\D]+[\/]+(?<number>[0-9]+)[\/]+/gm
    let exec = pattern.exec(input)

    while(exec !== null){

        let number = exec.groups["number"]
        let color = exec.groups["color"]

        console.log(`You found ${number} ${color} eggs!`);

        exec = pattern.exec(input)
    }

}

easterEggs
(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/'])


// (
// '@@@@green@*/10/',
// '@yel0w@*26*',
// '#red#####//8//',
// '@limon*@*23*',
// '@@@red#*/%^&/6/',
// '@gree_een@/notnumber/',
// '###purple@@@@@*$%^&*/5/'
// )