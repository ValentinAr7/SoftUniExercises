function ticketsData(arrayOfStrings, sortingCriteria) {

    //creates a Ticket class with a constructor that sets the destination, price and status properties of the object.
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status
        }
        // The class also has a compareTo method that compares the value of the specified criteria (destination, price or status) between two Ticket objects.
        compareTo(other, criteria) {
            if (typeof this[criteria] === 'string') {
                return this[criteria].localeCompare(other[criteria]);
            } else {
                return this[criteria] - other[criteria]
            }
        }
    }

    let tickets = []

    for (let i = 0; i < arrayOfStrings.length; i++) {
        //split each string into tokens
        let [destination, price, status] = arrayOfStrings[i].split("|")
        //parse price from string to integer
        price = Number(price)
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket)
    }

    //sorts the array using the compareTo method
    tickets.sort((a, b) => a.compareTo(b, sortingCriteria));
    return tickets

}

console.log(ticketsData(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'))