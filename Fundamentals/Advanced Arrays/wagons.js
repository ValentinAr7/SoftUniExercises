function vagonsSolve(arr) {

    let passangersInVagons = arr.shift().split("").map(Number)
    let maxCapacity = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        let currentRow = arr[i].split(" ")
        console.log(currentRow);
        // for(let r = 2; i < )

        // if(vagonsArray[i] < vagonsCapacity){
        //     vagonsArray[i]+= 
        // }
    }

}

vagonsSolve(['32 54 21 12 4 0 23',          // wagons       
    '75',           // wagons capacity
    'Add 10',       // commands
    'Add 0',
    '30',
    '10',
    '75'])