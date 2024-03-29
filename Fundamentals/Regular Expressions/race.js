function race(raceDataArray) {

    let racersArray = raceDataArray.shift().split(", ")
    let raceObject = {}

    const patternName = /[A-Za-z]+/g
    const patterDistance = /[0-9]+/g

    let command = raceDataArray.shift()

    while (command !== 'end of race') {
        const currentName = command.match(patternName).join("")

        let currentDistance = command.match(patterDistance).join("")

        if (racersArray.includes(currentName)) {
            let distance = 0

            for (const digit of currentDistance) {
                distance += Number(digit)

            }


            if (!raceObject.hasOwnProperty(currentName)) {
                raceObject[currentName] = distance;
            } else {
                raceObject[currentName] += distance
            }
        }

        command = raceDataArray.shift()

    }
    let sortedRacer = Object.entries(raceObject).sort((a,b)=>b[1]-a[1]);
    const firstPlace = sortedRacer[0][0];
    const secondPlace = sortedRacer[1][0];
    const thirdPlace = sortedRacer[2][0]
    console.log(`First place: ${firstPlace}`);
    console.log(`Second place: ${secondPlace}`);
    console.log(`Third place: ${thirdPlace}`);

}

race(['G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',

])