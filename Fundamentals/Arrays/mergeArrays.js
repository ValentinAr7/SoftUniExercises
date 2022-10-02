function mergeArrays(arr1, arr2){

let arr3 = [];
let evenNumber = 0;

for(let i = 0; i < arr1.length; i++){

    for(let y = 0; y < arr2.length; y++){

        if(arr1[i].length % 2 == 0 && arr2[y].length % 2 == 0){
            evenNumber = arr1[i] + arr2[y]
            arr3.push(evenNumber)
        }

    }
    
}
console.log(arr3);

}
mergeArrays
(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])