
// This function creates a div element for each word in the input "words" array, and appends them to the element with the id "content".
// Each div element has a click event listener attached to it, which will reveal the hidden paragraph element inside the div when clicked.function create(words) {

let content = document.getElementById("content")

for (const word of words) {
   let div = document.createElement("div");
   let p = document.createElement("p");
   p.textContent = word
   p.style.display = "none"
   div.appendChild(p)

   // Add a click event listener to the div that reveals the hidden paragraph when clicked
   div.addEventListener("click", reveal)

   content.appendChild(div)

   function reveal(event) {
      event.currentTarget.children[0].style.display = ""
   }
}



}