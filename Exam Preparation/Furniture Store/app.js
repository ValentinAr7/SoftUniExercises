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

        let model = modelElement.value
        let description = descriptionElement.value
        let year = Number(yearElement.value);
        let price = Number(priceElement.value)

        if (!model || !description) {
            return;
        }

        if (year <= 0 || price <= 0) {
            return
        }

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

        modelCellElement.textContent = model
        priceCellElement.textContent = price.toFixed(2);

        infoButtonElement.textContent = 'More Info'
        infoButtonElement.classList.add('moreBtn')
        infoButtonElement.addEventListener('click', (e) => {

            if (e.currentTarget.textContent == 'More Info') {
                contentsRowElement.style.display = 'contents';
                e.currentTarget.textContent = 'Less Info'
            } else {
                contentsRowElement.style.display = 'none'
                e.currentTarget.textContent = 'More Info'
            }
        })


        buyButtonElement.textContent = 'Buy it'
        buyButtonElement.classList.add('buyBtn')
        buyButtonElement.addEventListener('click', (e) => {
            let currentTotalPrice = Number(totalPriceElement.textContent)
            let totalPrice = currentTotalPrice + price
            totalPriceElement.textContent = totalPrice.toFixed(2)


            rowElement.remove()
            contentsRowElement.remove()
        })


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
