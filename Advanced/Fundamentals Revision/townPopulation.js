function townPopulation (array){

let townData = array
    .map(element => element.split(' <-> '))

    console.log(townData[0]);


}

townPopulation (

['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'])