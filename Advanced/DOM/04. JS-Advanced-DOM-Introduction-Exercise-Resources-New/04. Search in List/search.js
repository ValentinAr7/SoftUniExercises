function search() {
   let searchText = document.getElementById("searchText").value
   let result = document.getElementById("result")
   let listElement = document.querySelectorAll("ul#towns li")
   let matches = 0

   // Loop through all the list items and remove any styling
   for (const element of listElement) {
      element.style.fontWeight = "normal";
      element.style.textDecoration = "";
   }

   for (let element of listElement) {
      //Get the text content of the current list item
      let text = element.textContent

      // Check if the text content matches the search query
      if (text.match(searchText)) {
         matches++
         element.style.fontWeight = "bold"
         element.style.textDecoration = "underline"
      }

   }
   // Update the result element with the number of matches found
   result.textContent = `${matches} matches found`
}
