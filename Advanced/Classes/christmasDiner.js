class ChristmasDinner {

    constructor(budget) {
        this.budget = budget
        this.dishes = []
        this.products = []
        this.guests = {}

        if (this.budget < 0) {
            throw new Error(`The budget cannot be a negative number`)
        }
    }

    shopping([product, price]) {
        if (this.budget < price) {
            throw new Error(`Not enough money to buy this product`)
        } else {
            this.products.push(product)
            this.budget -= price
            return `You have successfully bought ${product}!`
        }
    }

    recipes({ recipeName, productsList }) {

        if (this.products.every(x => productsList.includes(x))) {
            this.dishes.push({ recipeName, productsList });
            return `${recipeName} has been successfully cooked!`
        } else {
            return `We do not have this product`
        }
    }

    inviteGuests(name, dish) {

        let findDishes = this.dishes.find(d => d.dish == dish);

        if (!findDishes) {
            return `We do not have this dish`
        }

        if (this.guests[name] === undefined) {
            return `This guest has already been invited`
        }

        this.guests[name] = dish
        return `You have successfully invited ${name}!`


    }

    showAttendance() {
        let result = "";
        for (const guest in this.guests) {
            const dish = this.dishes.find(({ recipeName }) => recipeName === this.guests[guest]);
            result += `${guest} will eat ${dish.recipeName}, which consists of ${dish.productsList.join(", ")}\n`;
        }
        return result.trim()
    }
}




let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
