function addAndSubstract(arr){

    let newArr = [];
    let inputArraySum = 0;
    letresultArraySum = 0;

for (let i = 0; i < arr.length; i++){
    let num = arr[i];
    
    if(num % 2 == 0){
        newArr.push(num + i);
    } else {
        newArr.push(num-i)
    }
}

console.log(newArr);
console.log(newArr++);



}

addAndSubstract([5, 15, 23, 56, 35])