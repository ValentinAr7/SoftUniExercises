function biggerHalf (input){

let newArray = input.sort((a,b) => a - b)

let halfArray = newArray.splice(newArray.length / 2)


if (halfArray.length > newArray.length){

    console.log(halfArray);
} else {
    console.log(halfArray);
}

}

biggerHalf ([3, 19, 14, 7, 2, 19, 6, 19])