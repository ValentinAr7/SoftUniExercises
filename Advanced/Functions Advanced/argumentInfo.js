function argumentInfo(){

const params = Array.from(arguments)

const types = {}

for(let arg of params){
    const type = typeof arg;
    console.log(`${type}: ${arg}`);

    if(types[type] == undefined){
        types[type] = 0;
    }
    types[type]++
}
console.log(types);
}

argumentInfo(
'cat', 
42, 
function () { 
    console.log('Hello world!');
})