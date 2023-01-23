window.addEventListener('load', solve);

function solve() {
    
    const input ={
        model: document.getElementById('model'),
        year: document.getElementById('year'),
        description: document.getElementById('description'),
        price: document.getElementById('price'),
    }


    let table = document.querySelectorAll('#information tr:nth-child(1) th')

    let btnAdd = document.getElementById('add')
    btnAdd.addEventListener('click', add)

    function add(){

        const model = input.model.value
        const year = input.year.value
        const description = input.description.value
        const price = input.price.value

        if(model == '' || year == '' || description == '' || price == ''){
            return;
        }
        
        const tbody = document.createElement('tbody')
        tbody.innerHTML = `<tbody>
        <tr class="info">
        <td>${model}</td>
        <td>${price}</td>
        <td>
        <button class="moreBtn">More Info</button>
        <button class="buyBtn">Buy it</button>
        </td>
        </tr>
        <tr class="hide">
        <td>Year: ${year}</td>
        <td colspan="3">${description}</td>
        </tr>
        </tbody>
        `
    }







    function moreInfo(){

    }

    function buy(){


    }



}
