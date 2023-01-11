function search() {
   let searchText = document.getElementById("searchText").value
   let result = document.getElementById("result")
   let listElement = document.querySelectorAll("ul#towns li")
   let matches =0

   for (const element of listElement) {
      element.style.fontWeight = "normal";
      element.style.textDecoration = "";
   }

   for(let element of listElement){
      let text = element.textContent

      if(text.match(searchText)){
         matches++
         element.style.fontWeight = "bold"
         element.style.textDecoration = "underline"
      }

   }
result.textContent = `${matches} matches found`
}
