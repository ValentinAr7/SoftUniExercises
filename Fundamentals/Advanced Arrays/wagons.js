function vagonsSolve (vagons){

    let vagonsNumber = Number(vagons[0])
    let vagonsCapacity = Number(vagons[1]);

    let vagonsArray = [] 
    vagonsArray.push(vagons[0]) 

    for(let i = 0; i < vagonsArray.length; i++){
    console.log(vagonsArray[i]);
    }

}

vagonsSolve(['32 54 21 12 4 0 23',          // wagons       
                            '75',           // wagons capacity
                            'Add 10',       // commands
                            'Add 0',        
                            '30',
                            '10',
                            '75'])