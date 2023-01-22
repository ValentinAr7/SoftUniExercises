function digitalRoot(n) {
   

    let sum = 0 //29

    let sumStr = sum.toString()
    let num = n.toString()





    for(let i = 0; i < num.length; i++){
        let currentNum = Number(num[i])
        sum+=currentNum

        for(let i=0; i<sumStr.length; i++){
            let curretnNum= Number()
        }
    }

    console.log(sum);

    
    

  }

  digitalRoot(493193)  //-->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2)