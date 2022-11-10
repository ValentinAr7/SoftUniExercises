function theLift(input){

    let peopleWaiting = input.shift()
    let queue = input.shift().split(" ")
    let liftSpace = 4

    for(let i = 0; i < queue.length; i++){
        let currenWagon = queue[i]

        if(currenWagon < liftSpace){
            peopleWaiting -= currenWagon        
            console.log(peopleWaiting);
    }
}

}

theLift([
    "15",
"0 1 2 0"
]
)