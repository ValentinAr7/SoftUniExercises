function townPopulation (data){

for(let i =0; i < data.length; i++){
    let currentTown = data[i].split(" <-> ")
    
    let obj = {
        town: currentTown[0],
        population: currentTown[1]
    }

    if(obj.hasOwnProperty(town)){
        obj.population += obj.population
    }

    console.log(obj);
}

}

townPopulation (
    ['Istanbul <-> 100000',

    'Honk Kong <-> 2100004',
    
    'Jerusalem <-> 2352344',
    
    'Mexico City <-> 23401925',
    
    'Istanbul <-> 1000'])