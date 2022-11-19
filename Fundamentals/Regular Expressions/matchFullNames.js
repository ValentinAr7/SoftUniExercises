function fullnames (text){

let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

let names = text.match(pattern)
console.log(names.join(" "));
}

fullnames(["ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan Ivanov"])