function bestDepartment(input){
class Company {
    constructor(){
        this.departments = {}

    }
     
    addEmployee(){

    }
}


    for(let i = 0; i < input.length; i++){
        let [name, salary, position, department] = input.split(', ')
        console.log(salary);
    }

    let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
}




// Best Department is: Construction
// Average salary: 1500.00
// Stan 2000 architect