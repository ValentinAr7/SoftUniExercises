function calculator() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let res = document.getElementById('result')

    let btnAdd = document.getElementById('sumButton')
    btnAdd.addEventListener('click', add)

    function add(){
        res = num1 + num2
        init.value = res
    }

    function init(){
 
    }

    // function substract (num1, num2){


    // }

   
    return{
        add,
        init
    }


}

const calculate = calculator ();
calculate.init ('#num1', '#num2', '#result');




