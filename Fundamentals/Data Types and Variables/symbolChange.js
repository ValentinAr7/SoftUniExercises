function symbolChange(str, char, string){

    let res = str.replace('_', char);

    if(res == string){
        console.log("Matched");
    } else{
        console.log("Not Matched");
    }
}
symbolChange('Str_ng', 'i',
'String')
