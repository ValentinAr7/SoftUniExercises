function miningRing (input){

    let videoCardPrice = Number(input[0]);
    let prehodnik = Number(input[1]);
    let electricityPerDay = Number(input[2]);
    let profitForDay = Number(input[3]);

    let totalPriceCards = videoCardPrice * 13
    let totalPricePrehodnice = prehodnik * 13

    let totalMoneySpent = totalPriceCards + totalPricePrehodnice + 1000

    let electricityProfit = profitForDay - electricityPerDay

    let totalProfitforDay = 13 * electricityProfit

    let daysNeeded = totalMoneySpent / totalProfitforDay

    console.log(totalMoneySpent);
    console.log(Math.ceil(daysNeeded));

}

miningRing(["700",
"15",
"0.20",
"2"])