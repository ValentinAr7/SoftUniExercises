function fizbuzz(){

let count = 0;
count++

while (count => 100){


    if(count % 3 == 0 && count % 5 == 0){
        console.log("fizbuzz");
    } else if ( count % 3 == 0){
        console.log("fizz");
    } else if (count % 5 == 0){
        console.log("fuzz");
    }

    count++
}

}