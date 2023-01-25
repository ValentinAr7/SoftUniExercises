window.addEventListener("load", solve);

function solve() {

  let carMakeElement = document.getElementById('make');
  let carModelElement = document.getElementById('model');
  let productionYearElement = document.getElementById('year');
  let fuelTypeElement = document.getElementById('fuel');
  let originalPriceElement = document.getElementById('original-price');
  let sellingPriceElement = document.getElementById('selling-price');

  let publishBtnElement = document.getElementById('publish');

  publishBtnElement.addEventListener('click', (e)=>{
    e.preventDefault();

    let make = carMakeElement.value;
    let model = carModelElement.value;
    let year = productionYearElement.value;
    let fuel = fuelTypeElement.value;
    let originalPrice = originalPriceElement.value;
    let sellingPrice = sellingPriceElement.value;

    if(!make  ||  !model  ||  !year  ||  !fuel   ||  !originalPrice  || !sellingPrice) {
        return}

    if(originalPrice > sellingPrice){
      return
    }
      

  })


}
