function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
   let input = JSON.parse(document.querySelector("#inputs textarea").value)      
   let avgSalary = 0;
   let totalSalary = 0;
   let currAvgSalary = 0;
   let bestName = "";
   let output = {};

   for(let inputElement of input){
      let restaurantInfo = inputElement.split(" - ");
      let restaurantName = restaurantInfo.shift();
      let workersData = restaurantInfo[0].split(", ");
   }
   

}
}