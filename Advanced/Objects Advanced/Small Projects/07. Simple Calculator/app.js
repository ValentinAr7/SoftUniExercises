function calculator() {
    // let num1 = document.getElementById('num1').value;
    // let num2 = document.getElementById('num2').value;
    // let res = document.getElementById('result')

    // let btnAdd = document.getElementById('sumButton')
    // btnAdd.addEventListener('click', add)

    let field1 = null;
    let field2 = null;
    let result = null;


    return{
        add,
        substract,
        init
    }

    function init(f1, f2, fr){
        field1 = document.querySelector(f1)
        field2 = document.querySelector(f2)
        result = document.querySelector(fr)
    }

    function add(){
        result.value = Number(field1.value) + Number(field2.value)
    }

    function substract (){
        result.value = Number(field2.value) - Number(field1.value)
    }



}

const calculate = calculator ();
calculate.init ('#num1', '#num2', '#result');




