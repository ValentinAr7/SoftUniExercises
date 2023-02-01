class ChristmasDinner {

    constructor(budget, dishes, products, guests){
        this.budget = budget
        this.dishes = dishes
        this.products = products
        this.guests = guests

        if(this.budget < 0){
            throw new Error (`The budget cannot be a negative number`)
        }

    }
}