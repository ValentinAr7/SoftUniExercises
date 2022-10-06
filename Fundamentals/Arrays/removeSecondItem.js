function removeSecondItem (arr){

    let newArr = [];
    
    for(let i = 0; i < arr.length; i++){
        let currentItem = arr[i];

        if(currentItem % 2 !== 0){
            newArr.push(currentItem)
        }
    }
    console.log(newArr);
}

removeSecondItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])