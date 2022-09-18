function watch (){
for(let hours = 0; hours < 24; hours++){
for(let min = 0; min <= 59; min++){
    
    if(min <= 9){
        console.log(`${hours}:0${min}`);
    }   else    {
        console.log(`${hours}:${min}`);
    }
}
}

}
watch()