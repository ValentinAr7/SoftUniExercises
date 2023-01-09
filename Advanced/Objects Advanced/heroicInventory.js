function heroicInventory (input){

// for (const hero of input){
//     let [name, level, items] = hero.split(" / ")
//     console.log(name);
// }

let result= {}

let splitData = input.map(element =>{
    let [name, levelAsText, items] = element.split(" / ")
    let level = Number(levelAsText)
    console.log(name);
})

}

heroicInventory ([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])