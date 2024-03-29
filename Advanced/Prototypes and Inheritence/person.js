function person (firstName, lastName){

    let person = {
        firstName,
        lastName,
        fullName: firstName + ' ' + lastName
    };

    Object.defineProperty(person, 'fullName', {

        //getter toconcatenate the first and last name
        get(){
            return this.firstName + ' ' + this.lastName
        },

        //setter gets a value and split it into 2 variables
        set(value){
            const [first, last] = value.split(' ');

            //checks if the input data is valid
            if(first != undefined && last != undefined){
                this.firstName = first;
                this.lastName = last;
            }
        }
    })

    return person;
}

let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla