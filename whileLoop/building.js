function building (input){

    let y = Number(input[0]);
    let x = Number(input[1]);

    for(let i = y; i >0; i--){
            let buff = "";
        for(let z = 0; z < x; z++){
            if(i === y){
                buff += `L${i}${z} `
            } else if (i % 2 === 0){
                buff+= `O${i}${z} `;
            } 

        }
    }

}

building(["6", "4"])