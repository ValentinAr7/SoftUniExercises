function requieredReading(numberPages, pagesFor1Hour, numberOfDays){

    let readPages = numberPages / pagesFor1Hour
    
    let totalDays = readPages / numberOfDays

    console.log(totalDays);

}

requieredReading(212, 20 ,2)