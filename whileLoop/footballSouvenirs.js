function footballSouvenirs(input){

    let index = 0;
    let n = Number(input[index]);

    let team = input[0];
    let souvenir = input[1];
    let numberSouvenier = Number(input[2]); 

    let totalPrice = 0;

    for(let i = 0; i < n; i++){
        let color = input[index];
        index++

        switch (team) {
            case "Argentina": 

            if(souvenir === "flags"){
                totalPrice += 3.25
                totalPrice++
            } else if (souvenir === "caps"){
                totalPrice += 7.20
                totalPrice++
            } else if ("poster"){
                

            }
            
            
            break;


            case "Brazil": break;
            case "Croatia": break;
            case "Denmark": break;
                

        }
    }

}

footballSouvenirs(["Brazil",
"stickers",
"5"])
