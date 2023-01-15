function breakfastOrder() {

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

    function manager(line) {
        let [command, param, qty] = line.split(" ")
        const fn = commands[command];
        return fn(param, qty)
    }

    function restock(type, qty) {
        stock[type] += Number(qty)
        return 'Success';
    }

    function report() {
        return `protein = ${stock.protein}, carbohydrate = ${stock.carbohydrate}, fat = ${stock.fat}, flovour = ${stock.flavour}`
    }

    function prepare(recipeAsString, qty) {
        qty = Number(qty);
        const recipe = Object.entries(recipe[recipeAsString]);

        recipe.forEach(ingridient => ingridient[1] *= qty);

        for (let [ingridient, requiered] of recipe) {
            if (stock[ingridient] < requiered) {
                return `Error: not enough: ${ingridient} in stock`
            }
        }
        recipe.forEach(([ingridient, requiered]) => stock[ingridient] -= requiered)
        return 'Success'
    }
    return function (command) {
    }

} breakfastOrder()