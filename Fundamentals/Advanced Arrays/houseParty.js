function houseParty(arr){

    let newGuestList = []

    for (const el of arr) {
        let command = el.split(" ")
        let name = command[0]

        if(el.length === 3){
            if(newGuestList.includes(name)){
                console.log(`${name} is already in the list!`);
            } else { 
                newGuestList.push(name)
        
            }


        }
    }


}
houseParty(['Allie is going!',
            'George is going!',
            'John is not going!',
            'George is not going!'])