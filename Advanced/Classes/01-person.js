class Person {
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
        toString() {
            return `${firstName} ${lastName} (age: ${age}, email: ${email})`;
       
    }
}
const newPerson = new Person ("John", 'Smith',27, 'john@gmail.com')
console.log(newPerson);