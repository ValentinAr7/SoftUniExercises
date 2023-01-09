function cityRecord (data){

    let obj = {
        city: data[0],
        population: data[1],
        trasury: data[2]
    }

    console.log(obj);

}

cityRecord (['Tortuga',
7000,
15000])