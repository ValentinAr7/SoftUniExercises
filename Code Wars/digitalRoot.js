function digitalRoot(n) {


    let sum = 0 //29

    let num = n.toString()

    while (num.length != 1) {
        for (let i = 0; i < num.length; i++) {
            let currentNum = Number(num[i])
            sum += currentNum
        }
    }




    console.log(sum);




}

digitalRoot(493193)  //-->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2)#


      // let sumStr = sum.toString()

    // for(let j=0; j<sumStr.length; j++){
    //     let curretnNum= Number(sumStr[j])
    //     sum  += curretnNum
    // }