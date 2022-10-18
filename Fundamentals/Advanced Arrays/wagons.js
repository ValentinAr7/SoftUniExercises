function vagonsSolve(arr) {

    let passangersInVagons = arr.shift().split(" ").map(Number)
    let maxCapacity = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        let currentRow = arr[i].split(" ")        

        if (currentRow === "Add"){
            let newPassangers = Number(currentRow[1])
            passangersInVagons.push(newPassangers)
        } else{
            for(let r = 0; r < passangersInVagons.length; r++){
                let passangersInCurrentVagons = passangersInVagons[r]
                if(passangersInCurrentVagons + Number(currentRow[0]) <= maxCapacity){
                passangersInVagons[r] += Number(currentRow[0])
                break;
                }
            }
        }
    }
    console.log(passangersInVagons.join(" "));
}

vagonsSolve(['32 54 21 12 4 0 23',          // wagons       
    '75',           // wagons capacity
    'Add 10',       // commands
    'Add 0',
    '30',
    '10',
    '75'])