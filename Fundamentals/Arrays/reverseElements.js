function reverseElements(n, numbers){
    let rev = [];
    for(let i = 0; i < n; i++){
        rev.push(numbers[i]);
    }

    for(r = rev.length - 1; r >=0; r--){
        console.log(rev[r]);
    }

}

reverseElements (3, [10, 20, 30, 40, 50])
console.log("----------------------------");
reverseElements (4, [-1, 20, 99, 5])