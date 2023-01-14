function outlier (integers){

    let even = integers.filter(num => num % 2 === 0);
    let odd = integers.filter(num => num % 2 !== 0);
    return even.length === 1 ? even[0] : odd[0];
    
}

outlier ([2, 4, 0, 100, 4, 11, 2602, 36])
//Should return: 11 (the only odd number)

outlier([160, 3, 1719, 19, 11, 13, -21])
//Should return: 160 (the only even number)