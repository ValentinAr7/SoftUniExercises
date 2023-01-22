function extendPrototype(proto){

proto.species = 'Human';
proto.toSpeciesString = function(){
    return `I am a ${this.species}. ${this.toString()}`
}
}


function Person (name, age){
    this.name = name,
    this.age = age
}

Person.prototype.toString =  function(){
    return `To string methid from prototype of ${this.name}`
}