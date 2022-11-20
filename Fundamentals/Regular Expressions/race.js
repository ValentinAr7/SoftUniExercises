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

            currentDistance.forEach(digit => {
                distance += Number(digit)
            });

            if (!raceObject.hasOwnProperty(currentName)) {
                raceObject[currentName] = distance;
            } else {
                raceObject[currentName] += distance
            }
        }

        command = raceDataArray.shift()

    }
}

race(['G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])