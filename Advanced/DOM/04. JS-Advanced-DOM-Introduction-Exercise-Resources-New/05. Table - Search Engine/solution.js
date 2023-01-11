function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   // Add an event listener to the button with ID 'searchBtn', so that when the button is clicked
   // the function `onClick()` will be called.
   let rows = document.querySelectorAll("tbody tr")
   // Select all elements with the "tr" tag (table rows)

   let input = document.getElementById("searchField")
   // Get the input element with the ID 'searchField' where user enters the search keyword
   function onClick() {
      // Iterate over each table row
      for (let row of rows) {
         // Remove the 'select' class from the row
         row.classList.remove("select")

         // Check if the row's innerHTML contains the search keyword
         if (row.innerHTML.includes(input.value)) {
            // If it does, add the 'select' class to the row

            row.className = "select"
         }
      }
      // Clear the search field by setting the input value to an empty string

      input.value = ""
   }
}