function solve() {
  let inputText = document.getElementById("text").value
  let convention = document.getElementById("naming-convention").value
  let result = ""

  // splitting the input text by spaces
  let words = inputText.split(" ")

  if (convention == "Camel Case") {
    // looping through the words
    for (let i = 0; i < words.length; i++) {
      // converting each word to lowercase
      words[i] = words[i].toLowerCase()

      // if the current word is not the first word in the input text,
      // then capitalizing the first letter of the word
      if (i != 0) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1)
      }
    }

    //same code as above but first word is in Capital Letter
  } else if (convention == "Pascal Case") {
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].toLowerCase()

      words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1)
    }
  } else {
    // if the naming convention is neither Camel Case nor Pascal Case, 
    // then the function returns "Error!"
    return document.getElementById("result") = "Error!"
  }

  // joining the words back together
  result = words.join("")
  document.getElementById("result").textContent = result
  console.log(words);
}




