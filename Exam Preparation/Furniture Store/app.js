window.addEventListener('load', solve);

function solve() {

    const addButtonElement = document.getElementById('add')
    const modelElement = document.getElementById('model')
    const yearElement = document.getElementById('year')
    const descriptionElement = document.getElementById('description')
    const priceElement = document.getElementById('price')
    const furnitureListElement = getElementById('furniture-list')

    addButtonElement.addEventListener('click', (e) =>{
        e.preventDefault()

        let model = modelElement.value
        let description = descriptionElement.value
        let year = Number(yearElement.value);
        let price = Number(priceElement.value)

        let rowElement = document.createElement('tr')
        let modelCellElement = document.createElement('td')
        let priceCellElement = document.createElement('td')
        let actionsCellElement = document.createElement('td')
        let infoButtonElement = document.createElement('button')
        let buyButtonElement = document.createElement('buttons')
        let contentsRowElement = document.createElement('tr')
        let yearContentElement = document.createElement('td')
        let descriptionContentElement = document.createElement('td')

        modelCellElement.textContent = model
        priceCellElement.textContent = price.toFixed(2);

        infoButtonElement.textContent = 'More Info'
        infoButtonElement.classList.add('moreBtn')
        buyButtonElement.textContent = 'Buy it'
        buyButtonElement.classList.add('buyBtn')

        infoButtonElement.addEventListener('click', (e) =>{
            e.currentTarget.textContent = 'Less Info'
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
        contentsRowElement.style.display = ' contents'

        furnitureListElement.appendChild(rowElement)

})
}
