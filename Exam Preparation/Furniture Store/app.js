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

        modelCellElement.textContent = model
        priceCellElement.textContent = price

        infoButtonElement.textContent = 'More Info'
        buyButtonElement.textContent = 'Buy it'

        actionsCellElement.appendChild(infoButtonElement)
        actionsCellElement.appendChild(buyButtonElement)

        rowElement.appendChild(modelCellElement)
        rowElement.appendChild(priceCellElement)
        rowElement.appendChild(actionsCellElement)

        furnitureListElement.appendChild(rowElement)

})
}
