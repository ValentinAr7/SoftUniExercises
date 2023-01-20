function trim(str, size) {

    let trimmedStr = []
    let cutter = size - 3


    if (str.length <= 3) {
        trimmedStr = str.slice(0, size)
        // console.log(trimmedStr + '...');
        return trimmedStr + '...'
    }


    else if (str.length <= size) {
        // console.log(str);
        return str
    }

    else if (str.includes('...')) {
        let newStr = str.substring(0, str.length - 3)
        return newStr
    }
    else {
        trimmedStr = str.slice(0, cutter)
        // console.log(trimmedStr + '...');
        return trimmedStr + '...'
    }


}

console.log(trim("Creating kata is fun", 2))
console.log(trim("He", 1))
console.log(trim("Code Wars is pretty rad", 50))
console.log(trim('Hey...', 3))
