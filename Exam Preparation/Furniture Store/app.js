window.addEventListener('load', solve);

function solve() {
    
    let model = document.getElementById('model');
    let year = document.getElementById('year');
    let description = document.getElementById('description');
    let price = document.getElementById('price');

    let btnAdd = document.getElementById('add')
    btnAdd.addEventListener('click', add)

    function add(){

        if(model == '' || year == '' || description == '' || price == ''){
            return;
        }
        
    }







    function moreInfo(){

    }

    function buy(){


    }



}
