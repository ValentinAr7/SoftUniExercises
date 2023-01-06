function carEngine (data){

    let res = {}

    res.model = data.model

    console.log(res);
}

carEngine({ 
model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 })