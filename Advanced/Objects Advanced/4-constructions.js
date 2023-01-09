function constructions (worker){

if(worker.dizziness = true){
    worker.hydratation = (0.1 * worker.weight * worker.experience) + worker.levelOfHydrated
    worker.dizziness = false
    
} 

return worker

}

constructions ({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: false })