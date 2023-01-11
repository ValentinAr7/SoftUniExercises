function solve() {
  let inputText = document.getElementById("text").value
  let convention = document.getElementById("naming-convention").value
  let result = ""

  // if(convention = "Camel Case"){
  let words = inputText.split(" ")

  if (convention == "Camel Case") {
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].toLowerCase()

      if (i != 0) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1)
      }
    }
  } else if (convention == "Pascal Case") {
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].toLowerCase()

      words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1)
    }
  } else {
    return document.getElementById("result") = "Error!"
  }
  result = words.join("")
  document.getElementById("result").textContent = result
  console.log(words);
}




