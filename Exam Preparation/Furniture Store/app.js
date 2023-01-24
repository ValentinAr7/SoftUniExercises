window.addEventListener('load', solve);

function solve() {

    //get all elements with IDs
    const addButtonElement = document.getElementById('add')
    const modelElement = document.getElementById('model')
    const yearElement = document.getElementById('year')
    const descriptionElement = document.getElementById('description')
    const priceElement = document.getElementById('price')
    const furnitureListElement = document.getElementById('furniture-list')

    // create event for Add button
    addButtonElement.addEventListener('click', (e) => {
        //prevent refreshing of the page
        e.preventDefault()

        //get the values of all 4 input fields and convert year and price into numbers
        let model = modelElement.value
        let description = descriptionElement.value
        let year = Number(yearElement.value);
        let price = Number(priceElement.value)


        //check for any empty fields
        if (!model || !description) {
            return;
        }

        //check if price or year are <= 0
        if (year <= 0 || price <= 0) {
            return
        }

        //create all eleents requiered in the table
        let rowElement = document.createElement('tr')
        let modelCellElement = document.createElement('td')
        let priceCellElement = document.createElement('td')
        let actionsCellElement = document.createElement('td')
        let infoButtonElement = document.createElement('button')
        let buyButtonElement = document.createElement('button')
        let contentsRowElement = document.createElement('tr')
        let yearContentElement = document.createElement('td')
        let descriptionContentElement = document.createElement('td')
        let totalPriceElement = document.querySelector('.total-price')

        // set the text content of the model cell to the entered model
        modelCellElement.textContent = model
        // set the text content of the price cell to the entered price
        priceCellElement.textContent = price.toFixed(2);

        //set text content of 'More Info' buttons
        infoButtonElement.textContent = 'More Info'
        //add class to the button
        infoButtonElement.classList.add('moreBtn')
        infoButtonElement.addEventListener('click', (e) => {

            //change display and text content when click the buttons
            if (e.currentTarget.textContent == 'More Info') {
                //toggle
                contentsRowElement.style.display = 'contents';
                e.currentTarget.textContent = 'Less Info'
            } else {
                //hide
                contentsRowElement.style.display = 'none'
                e.currentTarget.textContent = 'More Info'
            }
        })

        //chane text content of the button
        buyButtonElement.textContent = 'Buy it'
        //add class to the button
        buyButtonElement.classList.add('buyBtn')

        buyButtonElement.addEventListener('click', (e) => {
            //add up the sum of all purchased items
            let currentTotalPrice = Number(totalPriceElement.textContent)
            let totalPrice = currentTotalPrice + price
            // 00.00
            totalPriceElement.textContent = totalPrice.toFixed(2)

            //remove item data in table once item is purchase
            rowElement.remove()
            contentsRowElement.remove()
        })

        //append childs
        actionsCellElement.appendChild(infoButtonElement)
        actionsCellElement.appendChild(buyButtonElement)

        rowElement.classList.add('info')

        rowElement.appendChild(modelCellElement)
        rowElement.appendChild(priceCellElement)
        rowElement.appendChild(actionsCellElement)

        yearContentElement.textContent = `Year: ${year}`
        descriptionContentElement.setAttribute('colspan', 3)
        descriptionContentElement.textContent = `Description: ${description}`

        contentsRowElement.classList.add('hide')
        contentsRowElement.style.display = 'none'

        contentsRowElement.appendChild(yearContentElement)
        contentsRowElement.appendChild(descriptionContentElement)

        furnitureListElement.appendChild(rowElement)
        furnitureListElement.appendChild(contentsRowElement)

    })
}
