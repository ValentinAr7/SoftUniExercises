function subSum (arr, start, finish){
    let sum = 0

    if(Array.isArray(arr) == false){
        return NaN
    }

    if(start < 0){
        start = 0
    }

    if(finish > arr.length - 1 ){
    finish = arr.length - 1    
}


for(let i = start; i<=finish; i++){
    sum += Number(arr[i])
    
}
console.log(sum);
}


subSum ([10, 20, 30, 40, 50, 60], 3, 300)
subSum ([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)
subSum ([10, 'twenty', 30, 40], 0, 2)
subSum ([], 1, 2)
subSum ('text', 0, 2)

