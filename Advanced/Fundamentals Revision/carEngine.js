function carEngine (data){

    let res = {}

    res.model = data.model

    if(data.power <= 90){
        res.engine = {
          power: 90,
          volume: 1800  
        }
    } else if(datapower <= 120){
        res.engine = {
            power: 120,
            volume: 2400
        }
    } else {
        res.engine = {
            power: 200,
            volume: 3500
        }
    }

    if(data.carriage == 'hatchback'){
        res.carriage = {
            type: 'hatchback',
            color: data.color
        }
    } else if(data.carriage == 'hatchback'){
        res.carriage = {
            type: 'coupe',
            color: data.color
        }
    }

    console.table(res)
}

carEngine({ 
model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 })