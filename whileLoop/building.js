function building (input){

    let floor = Number(input[0]);
    let apartment = Number(input[1]);

    for(let i = floor; i >0; i--){
            let buff = "";
        for(let z = 0; z < apartment; z++){
            if(i === floor){
                buff += `L${i}${z} `
            } else if (i % 2 === 0){
                buff+= `O${i}${z} `;
            } else{
                buff += `A${i}${z}`
            }
        }
    }

}

building(["6", "4"])