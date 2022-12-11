function isValidWalk(walk) {

let isValid = false
let meterBlock = 0
let startingPoint = walk[0]

for(let i = 0; i < walk.length; i++){
    let currentStep = walk[i]
    
    if(i == 9){
        
        

        isValid = true
    } else {
        isValid = false
    }
}
console.log(isValid);
}

isValidWalk(['n','s','n','s','n','s','n','s','n','s'])

