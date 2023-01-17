var uniqueInOrder=function(string){

    let result = []

    for(let i = 0; i < string.length; i++){
        let currentLetter = string[i]
        let nextChar = string[i + 1]

        if(!result.includes(currentLetter) && currentLetter !== nextChar){
            result.push(currentLetter)
        }
    }
    console.log(result);

  }

//   uniqueInOrder('AAAABBBCCDAABBB')


//   describe("Tests", () => {
//     it("test", () => {
//       assert.deepEqual(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
//     });
//   });
  