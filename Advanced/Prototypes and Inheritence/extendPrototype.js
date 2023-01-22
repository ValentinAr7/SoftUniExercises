function extendPrototype(proto){

proto.species = 'Human';
proto.toSpeciesString = function(){
    return `I am a ${this.species}. ${this.toString()}`
}
}
