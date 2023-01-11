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

   for(let worker of workerData){
      let [name, salary] = worker.split(" ");
   
   if(!output.hasOwnProperty(restaurantName)){
      output[restaurantName[name] = Number(salary)]
   }
   }
}
   let entries = object.entrries(output);

   for(let entry of entries){
      let key = entry[0];
      let values = Object.entries(entry[1]);

      for(let [name, salary] of values){
         totalSalary += salary
      }

      avgSalary = totalSalary / values.length

      if(avgSalary > currAvgSalary){
         currAvgSalary = avgSalary
         bestName = key;
         totalSalary = 0;
      }
   }

   let result = Object.entries(output[bestName])
   .sort((a,b)=> b[1] - a[1]);

   


}