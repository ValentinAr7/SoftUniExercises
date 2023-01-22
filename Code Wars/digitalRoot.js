function digitalRoot(n) {
    if (n < 10) return n;
  return digitalRoot(n.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0));
}

digitalRoot(493193)  //-->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2)#


      // let sumStr = sum.toString()

    // for(let j=0; j<sumStr.length; j++){
    //     let curretnNum= Number(sumStr[j])
    //     sum  += curretnNum
    // }