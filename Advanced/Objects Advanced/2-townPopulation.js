function townPopulation(data) {

    let obj = {}

    for (let el of data) {
        let [town, populationText] = el.split(" <-> ");
        let population = Number(populationText)


        if (!obj[town]) {
            obj[town] = 0
        }

        obj[town] += population


        for (const town in obj) {
            console.log(`${town} : ${obj.town}`);
        }
    }
}

townPopulation(
    ['Istanbul <-> 100000',

        'Honk Kong <-> 2100004',

        'Jerusalem <-> 2352344',

        'Mexico City <-> 23401925',

        'Istanbul <-> 1000'])