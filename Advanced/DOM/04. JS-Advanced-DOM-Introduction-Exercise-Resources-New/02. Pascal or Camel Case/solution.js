function solve() {
  let inputText = document.getElementById("text").value
  let convention = document.getElementById("naming-convention").value
  let result = ""

  // if(convention = "Camel Case"){
      let words = inputText.split(" ")
      
      if(convention == "Camel Case"){
        for(let i = 0; i < words.length; i++){
          words[i] = words[i].toLowerCase()
          
          if(i != 0){
            words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1)
          }
        }
      }
      console.log(words);
    }

    //   for(let word of words){
    //     word[0].toUpperCase()
    //   let res = word
    //   result.textContent = word

      
    // }
  
  


