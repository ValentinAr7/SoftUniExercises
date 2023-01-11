function solve() {
  let inputText = document.getElementById("text").value
  let convention = document.getElementById("naming-convention").value
  let butt = document.getElementById("result")

  if(convention = "Camel Case"){
    let wordsSeparetor = convention.map(element => {
      let words = element.split(" ").toLowerCase()

      for(let word of words){
        word[0].toUpperCase()
      return words
      }
      
    })
  }
}

