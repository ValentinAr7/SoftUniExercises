function matchNumbers(input){


    let text = input.shift()
    let patter = /\b\+359([ -])2 \1\ d{4} \1\ d{4}\b/g


    
    let result = input.match(patter)
    console.log(result.join(" "));


}
matchNumbers(["359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222"])