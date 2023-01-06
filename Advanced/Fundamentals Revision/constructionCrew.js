function constructionCrew (data){

let worker = {}

    worker.weight = {
        weight: data.weight}

    worker.experience = {Experiance: data.experience}

    if(data.dizziness == true){
        worker.water = {
            levelOfHydrated: (0.1 * data.weight * data.experience) + data.levelOfHydrated
        }
        worker.dizziness = {
            dizziness: false
        }
    } 

console.table(worker);
}

constructionCrew ({ 
    
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true 

})

console.log("----------------");

constructionCrew({ 
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true 
})