function ticketsData(arrayOfStrings, sortingCriteria){

    let tickets = []

    for(let i = 0; i < arrayOfStrings.length; i++){
        let [destination, price, status] = arrayOfStrings[i].split("|")
        price = Number(price)
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket)

    }


}

ticketsData(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination')