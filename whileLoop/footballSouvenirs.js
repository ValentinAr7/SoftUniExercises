function footballSouvenirs(input) {

    let team = input[0];
    let souvenir = input[1];
    let num = Number(input[2]);

    let totalPrice = 0;

    switch (team) {
        case "Argentina":
            switch (souvenir) {
                case "flags":
                    totalPrice = num * 3.25
                    break;

                case "caps":
                    totalPrice = num * 7.20
                    break;

                case "poster":
                    totalPrice = num * 5.10
                    break;


                case "stickers":
                    totalPrice = num * 1.25
                    break;

                    default: console.log("Invalid stock!"); break;
            }
            break;

        case "Brazil":
            switch (souvenir) {
                case "flags":
                    totalPrice = num * 4.20
                    break;

                case "caps":
                    totalPrice = num * 8.50
                    break;

                case "poster":
                    totalPrice = num * 5.35
                    break;


                case "stickers":
                    totalPrice = num * 1.20
                    break;

                    default: console.log("Invalid stock!"); break;
            }
            break;

        case "Croatia":
            switch (souvenir) {
                case "flags":
                    totalPrice = num * 2.75
                    break;

                case "caps":
                    totalPrice = num * 6.90
                    break;

                case "poster":
                    totalPrice = num * 4.95
                    break;


                case "stickers":
                    totalPrice = num * 1.10
                    break;

                    default: console.log("Invalid stock!"); break;
            }
            break;
        case "Denmark":
            switch (souvenir) {
                case "flags":
                    totalPrice = num * 3.10
                    break;

                case "caps":
                    totalPrice = num * 6.50
                    break;

                case "poster":
                    totalPrice = num * 4.80
                    break;


                case "stickers":
                    totalPrice = num * 0.90
                    break;

                    default: console.log("Invalid stock!"); break;
            }
            break;

            default: console.log("Invalid country!"); break
            
    }
    
    console.log(`Pepi bought ${num} ${souvenir} of ${team} for ${(totalPrice).toFixed(2)} lv.`);
}





footballSouvenirs(["bufaria",
    "stickers",
    "5"])
