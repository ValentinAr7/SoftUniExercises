function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){

let fights = lostFights = 0;
let helmetRepair = 0;
let swordRepair = 0;
let shieldRepair = 0;
let armorRepair = 0;

let brokenShield = 0;

let expenses = 0;

for(let currentFight = 1; currentFight <= lostFights; currentFight++){
    
    if(currentFight % 2 === 0){
        expenses += helmetPrice
    }
    if(currentFight % 3 == 0){
        expenses += swordPrice
    }
    if(currentFight % 2 == 0 && currentFight % 3 == 0){
        expenses += shieldPrice
        brokenShield++
        if(brokenShield % 2 == 0){
            expenses += armorPrice
        }
}
}
console.log(expenses);
}

gladiatorExpenses(7, 2, 3, 4, 5)