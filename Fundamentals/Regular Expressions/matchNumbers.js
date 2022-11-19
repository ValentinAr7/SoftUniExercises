function matchNumbers(input){

    let patter = /\b\+359([ -])2 \1\ d{4} \1\ d{4}\b/g

    let num = input.match(patter)
    console.log(num.join(" "));


}
matchNumbers("359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222")