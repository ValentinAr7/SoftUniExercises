// const person = {
//     name: 'Valentin',
//     age: 25,
//     height: 1.85
// }

// console.log(person.name)     // => returns the value of the selected key
// console.log(person['name']); //     ---------- | -----------

// person.age = 30              // => change the value of the selected key
// person.lastName = 'Arnautski'   // create new property in the object

// delete person.lastName          // delete the entire property from the object
// person.lastName = undefined      //deletes the value of the property but NOT the key
// //                                  it is preffered method rather than DELETE
// //_________________________________________________________________________________________
// //destructuring
// let {name, height} = person     // create variables from the object
// // it creates a !!! COPY which means they are not connected
// // changing variable value does not change the value in the object
// // curly braces {} indicate what object to get the data from (object {}, array [])
// //_________________________________________________________________________________________

// //_________________________________________________________________________________________
// for(let key in obj){            
//     console.log(`${obj.key} = ${obj[key]}`);
// }       
// //the 'key' returns only the key
// //the obj[key] returns only the values of the object

// let keys = Object.keys(obj)     //return all keys of the object
// let values = Object.values(obj) // return all values of the object 
// let entries = Object.entries(obj)   //return both keys and values
// // entries return the result as a matrix - array of small arrays made of key and values
// //Example       [  ['Tim, '25'], ['John', 25], 'Brian', 50]  ]

// let sorting = Object.fromEntries()
// //Sorting object data
// // first convert the object into matrix with object.entries()
// variable.sort((a, b) =>{
//     return a[0].localeCompare(b[0])
// })
// // 
// //_________________________________________________________________________________________

// //_________________________________________________________________________________________
// //Errors
// //if try to access a property that is not in the object you get 'Undefined'
// console.log(person.lastName) // === Undefined
// //The Object.fromEntries() static method transforms a list of key-value pairs into an object.


// if(var in obj){} 



const obj = {
  name: 'Peter',
  age: 25
};
console.log(Object.getOwnPropertyDescriptors(obj));

Object.defineProperty(obj, 'name', {
    enumerable: false
})


// class Person {
//     constructor(name, age){  
//         this.name = name
//         this.age = age
//     }

//     sayHello(){
//         console.log(this.name + ' say hello');
//     }
// }

// const guy1 = new Person('Peter', 33)
// guy1.sayHello()   
// console.log(guy1);

 