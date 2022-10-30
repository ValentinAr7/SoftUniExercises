function movies (movieData){

    for(let i = 0; i < movieData.length; i++){
        let splittedArray = movieData.split(" ")
        console.log(splittedArray);
    }
    

}

([

    'addMovie Fast and Furious',
    'addMovie Godfather',
    
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',

    'Fast and Furious directedBy Rob Cohen'
    ])