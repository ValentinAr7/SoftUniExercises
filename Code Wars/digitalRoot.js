function digitalRoot(n) {
    if (n < 10) return n;
    return digitalRoot(n.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0));
}

//convert to string
//split the number y '' to transfor it into array so it can be itterated
//After that reduce method is used to iterate over the array and reduce it to a single value.


digitalRoot(493193)  //-->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2)#
