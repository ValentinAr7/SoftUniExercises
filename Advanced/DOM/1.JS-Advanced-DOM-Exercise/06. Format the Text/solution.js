// This JavaScript code defines a function called `solve()` that takes the input text, 
//split into sentences and creates new paragraphs, each one containing 3 sentences.
function solve() {
  let input = document.getElementById("input").value
  let output = document.getElementById("output")

  // Split the input text into sentences
  let sentance = input.split(".").filter(s => s.length != 0)

  // Keep creating new paragraphs while there are sentences left
  while (sentance.length > 0) {
    // Get the first 3 sentences of the array and join them with .
    let textForParagraph = sentance.splice(0, 3).join(". ") + "."

    // Create a new paragraph element
    let p = document.createElement("p");
    // set the text content of the new paragraph to be the sentences we joined
    p.textContent = textForParagraph
    // append the new created p element to the output element
    output.appendChild(p)
  }
}