function calculator() {


    let field1 = null;
    let field2 = null;
    let result = null;

    return{
        add,
        substract,
        init
    }

    // Initialize the function with the field1, field2, and result field
    function init(f1, f2, fr){      
        field1 = document.querySelector(f1)     
        field2 = document.querySelector(f2)
        result = document.querySelector(fr)
    }

    // Add function to add the values of field1 and field2 and set the result
    function add(){
        result.value = Number(field1.value) + Number(field2.value)
    }

    // Substract function to substract the value of field1 from field2 and set the result
    function substract (){
        result.value = Number(field1.value) - Number(field2.value)
    }



}

const calculate = calculator ();
calculate.init ('#num1', '#num2', '#result');




