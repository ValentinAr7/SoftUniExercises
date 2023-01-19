function carFactory(data) {

    let res = {}
    res.model = data.model

    if (data.power <= 90) {
        res.engine {
            power: 90,
            volume: 1800
        }
    } else if (data.power <= 90) {
        res.engine {
            power: 120,
            volume: 2400
        }
    } else (data.power <= 90){
        res.engine {
         power: 200,
         volume: 3500
        }
     }

}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
})


// { model: 'VW Golf II',
// engine: { power: 90, volume: 1800 },
// carriage: { type: 'hatchback', color: 'blue' },
// wheels: [13, 13, 13, 13] }