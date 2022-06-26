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
            } else if (souvenir === "poster"){
                totalPrice += 5.10
                totalPrice++
            } else if  (souvenir === "stickers"){
                totalPrice += 1.25
                totalPrice++
            } else {
                console.log("Invalid stock");
            }
            break;


            case "Brazil": 
            if(souvenir === "flags"){
                totalPrice += 4.20
                totalPrice++
            } else if (souvenir === "caps"){
                totalPrice += 8.50
                totalPrice++
            } else if (souvenir === "poster"){
                totalPrice += 5.35
                totalPrice++
            } else if  (souvenir === "stickers"){
                totalPrice += 1.20
                totalPrice++
            } else {
                console.log("Invalid stock");
            }
            break;


            case "Croatia": 
            if(souvenir === "flags"){
                totalPrice += 2.75
                totalPrice++
            } else if (souvenir === "caps"){
                totalPrice += 6.90
                totalPrice++
            } else if (souvenir === "poster"){
                totalPrice += 4.95
                totalPrice++
            } else if  (souvenir === "stickers"){
                totalPrice += 1.10
                totalPrice++
            } else {
                console.log("Invalid stock");
            }
            break;
            
            
            
            case "Denmark": 
            if(souvenir === "flags"){
                totalPrice += 3.10
                totalPrice++
            } else if (souvenir === "caps"){
                totalPrice += 6.50
                totalPrice++
            } else if (souvenir === "poster"){
                totalPrice += 4.80
                totalPrice++
            } else if  (souvenir === "stickers"){
                totalPrice += 0.90
                totalPrice++
            } else {
                console.log("Invalid stock");
            }
            break;
                
        }
    }

    console.log(`Pepi bought ${numberSouvenier} ${souvenir} of ${team} for ${totalPrice} lv.`);

}

footballSouvenirs(["Brazil",
"stickers",
"5"])
