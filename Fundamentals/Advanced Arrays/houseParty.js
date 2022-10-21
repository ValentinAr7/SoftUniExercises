function houseParty(arr){

    let newGuestList = []

    for (const el of arr) {
        let command = el.split(" ")    // separets the sentance into separate strings
        let name = command[0]           // then stores the first string of the sentace 

        //example    "Allie is going" --------> "Allie", "is", "going"
//________________________________________________________________________________________________

  
            if(el.length === 3){
            if(newGuestList.includes(name)){
                console.log(`${name} is already in the list!`);
                // check if the array includes the name 
            } else { 
                newGuestList.push(name)
            }

        } else {

            if(!newGuestList.includes(name)){
            console.log(`${name} is not in the list`);
        
        } else {
            let index = newGuestList.indexOf(name); //indexOf shows the index of element in the array
            newGuestList.splice(index,1)            // print the element

            
        }
    }
}

    console.log(newGuestList.join("/n"));
}
houseParty(['Allie is going!',
            'George is going!',
            'John is not going!',
            'George is not going!'])