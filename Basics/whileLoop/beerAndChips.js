function beerAndChips(input){

    let name = input[0];
    let budjed = Number(input[1]);
    let bottlesBeer = Number(input[2]);
    let numberChips = Number(input[3])

    let totalPriceForBeer = 1.20 * bottlesBeer
    let chipsPrice = totalPriceForBeer * 0.45
    let totalPriceForChips = Math.ceil(chipsPrice * numberChips)

    let totalPrice = totalPriceForBeer + totalPriceForChips

    if(totalPrice > budjed){
        console.log(`${name} needs ${(totalPrice - budjed).toFixed(2)} more leva!`);
    } else {
        console.log(`${name} bought a snack and has ${(budjed - totalPrice).toFixed(2)} leva left.`);
    }

}

beerAndChips(["George",
"10",
"2",
"3"])
