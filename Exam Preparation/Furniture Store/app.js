window.addEventListener('load', solve);

function solve() {


    const modelElement = document.getElementById('model')
    const yearElement = document.getElementById('year')
    const descriptionElement = document.getElementById('description')
    const priceElement = document.getElementById('price')
    const furnitureListElement = getElementById('furniture-list')

    const btnAdd = document.getElementById('add')
    btnAdd.addEventListener('click', add)

    function add(event) {
        event.preventDefault()

        let model = modelElement.value
        let description = descriptionElement.value
        let year = Number(yearElement.value);
        let price = Number(priceElement.value)

        if(!modelElement.value || !descriptionElement.value){
            return
        }


        if(year <= 0 || price <=0){
            return
        }


        let rowElement = document.createElement('tr')
        let modelCellElement = document.createElement('td')
        let priceCellElement = document.createElement('td')
        let actionsCellElement = document.createElement('td')

        modelCellElement.textContent = model
        priceCellElement.textContent = price

        rowElement.appendChild(modelCellElement)
        rowElement.appendChild(priceCellElement)
        rowElement.appendChild(actionsCellElement)

    }
}
