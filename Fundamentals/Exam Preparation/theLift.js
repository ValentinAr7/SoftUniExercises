function theLift(input){

    let peopleWaiting = input.shift()
    let wagons = input.shift().split(" ")

    let liftFreeCapacity = wagons.length * 4 
    console.log(wagons);
    let sum = 0

    

    for(i = 0; i < wagons.length; i++){
        sum += parseInt(wagons[i]);
        }

        let freeCapacity = liftFreeCapacity - sum
        
        for(let i = 0; i < wagons.length; i++){
            let currentWagon = wagons[i]
            let freeWagonSpace = 4 - currentWagon
            console.log(freeWagonSpace);

            if(peopleWaiting <= 0){
                break
            }

            if(freeWagonSpace <= 0){
                continue
            }

            if(peopleWaiting < freeWagonSpace){
                    wagons[i] += peopleWaiting
                    freeWagonSpace -= peopleWaiting
                    freeCapacity -= peopleWaiting
                    peopleWaiting -= peopleWaiting
                    break
            }
            else if(peopleWaiting > freeWagonSpace){
                peopleWaiting -= peopleWaiting
                wagons[i] += freeWagonSpace
                liftFreeCapacity -= freeWagonSpace
            } else{
                peopleWaiting -=peopleWaiting
                wagons[i]
            }
        }

     }
    



theLift([
    "15",
"5 1 2 0"
]
)