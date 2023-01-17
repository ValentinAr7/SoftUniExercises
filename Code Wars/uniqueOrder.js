var uniqueInOrder=function(iterable){

    let result = []

    for(let i = 0; i < iterable.length; i++){
        let currentLetter = iterable[i]
        let nextChar = iterable[i + 1]

        if(currentLetter !== nextChar){
                
            if(!result.includes(currentLetter)){
        }
        result.push(currentLetter)
        }
    }
return result
  }

  uniqueInOrder('AAAABBBCCDAABBB')


//   describe("Tests", () => {
//     it("test", () => {
//       assert.deepEqual(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
//     });
//   });
  