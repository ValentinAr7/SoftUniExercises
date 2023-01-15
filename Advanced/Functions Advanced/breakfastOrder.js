function breakfastOrder(){

    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }


    const commands = {
        restock,
        prepare,
        report
    }

    function manager(line){
        let [command, param, qty] = line.split(" ")
        const fn = commands[command];
        return fn(param, qty)
    }

    function restock(type, qty){
        stock[type] += Number(qty)
        return 'Success';
    }

    function report (){
        return `protein = ${stock.protein}, carbohydrate = ${stock.carbohydrate}, fat = ${stock.fat}, flovour = ${stock.flavour}`
    }
    


    return function (command){


    }


} breakfastOrder()