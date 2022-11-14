function carPlates (input){

    let parkingList = new Map

    let fullList = input.map(el => el.split(", "))
    // to transform array to array of elements

    fullList.forEach(element => {
        let command = element[0]
        let numberPlate = element[1]

        if(command === "IN"){
            parkingList.set(numberPlate, command)
        } else if( command === "OUT"){
            parkingList.delete(numberPlate)
        }
    });

}

carPlates([

'IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'

])