function heroicInventory (input){

// for (const hero of input){
//     let [name, level, items] = hero.split(" / ")
//     console.log(name);
// }

let result= []

let splitData = input.map(element =>{
    let [name, levelAsText, items] = element.split(" / ")
    let level = Number(levelAsText)
    items = items ? items.split(", ") : []              // check ? If there is items - split them. If not : return an empty array
    result.push({name, level, items})
})

console.log(JSON.stringify(result));


}

heroicInventory ([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])


console.log("-------------------");


heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade'])