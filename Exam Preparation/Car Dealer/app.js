window.addEventListener("load", solve);

function solve() {

  let carMakeElement = document.getElementById('make');
  let carModelElement = document.getElementById('model');
  let productionYearElement = document.getElementById('year');
  let fuelTypeElement = document.getElementById('fuel');
  let originalPriceElement = document.getElementById('original-price');
  let sellingPriceElement = document.getElementById('selling-price');
  let publishBtnElement = document.getElementById('publish');

  let tableBodyElement = document.getElementById('table-body')

  publishBtnElement.addEventListener('click', (e)=>{
    e.preventDefault();

    let make = carMakeElement.value;
    let model = carModelElement.value;
    let year = productionYearElement.value;
    let fuel = fuelTypeElement.value;
    let originalPrice = originalPriceElement.value;
    let sellingPrice = sellingPriceElement.value;

    // if(!make  ||  !model  ||  !year  ||  !fuel   ||  !originalPrice  || !sellingPrice) {
    //     return}

    // if(originalPrice > sellingPrice){
    //   return
    // }

    let tableRowElement = document.createElement('tr');
    tableRowElement.classList.add(row)

    let makeCellElement = document.createElement('td')
    let modelCellElement = document.createElement('td')
    let yearCellElement = document.createElement('td')
    let fuelTypeElement = document.createElement('td')
    let originalPriceCellElement = document.createElement('td')
    let sellingPriceCellElement = document.createElement('td')

    makeCellElement.textContent = make;
    modelCellElement.textContent = model;
    yearCellElement.textContent = year;
    fuelTypeElement.textContent = fuel;
    originalPriceCellElement.textContent = originalPrice
    sellingPrice.textContent = sellingPrice

    let btnsRow = document.createElement('td')

    let editBtnElement = document.createElement('button')
    editBtnElement.classList.add('action-btn')
    editBtnElement.textContent('Edit')
    btnsRow.appendChild(editBtnElement)

    let sellBtnElement = document.createElement('button')
    sellBtnElement.classList.add('action-btn')
    sellBtnElement.textContent('Sell')
    btnsRow.appendChild(sellBtnElement)


    tableRowElement.appendChild(sellingPriceCellElement)
    tableRowElement.appendChild(originalPriceCellElement)
    tableRowElement.appendChild(fuelTypeElement)
    tableRowElement.appendChild(fuelTypeElement)
    tableRowElement.appendChild(yearCellElement)
    tableRowElement.appendChild(modelCellElement)
    tableRowElement.appendChild(makeCellElement)
    tableRowElement.appendChild(btnsRow)



    tableBodyElement.appendChild(tableRowElement)

      

  })


}
