
const solution = (start, finish, difference = finish - start) =>
Math.floor(difference / 3) + difference % 3







catsAndShelves(1, 5)
function catsAndShelves(start, finish) {

    currentRow = 0

    let workingNumber = finish - start
    let reminder = Math.floor(workingNumber / 3)        //5
    let threeRows = reminder * 3        //15
    let singleRows = finish - (threeRows + start)

    let jumps = reminder + singleRows
console.log(jumps);
}
catsAndShelves(1, 5)


