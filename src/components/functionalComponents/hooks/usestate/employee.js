import { useState } from "react"

const Employe=()=>{

    const [employees, setEmployees] = useState([
        { Name: "Aravind", Age: 22, Designation: "Frontend Developer", Salary: 29000 },
        { Name: "Sravya", Age: 21, Designation: "Backend Developer", Salary: 25000 },
        { Name: "Surya", Age: 23, Designation: "Frontend Developer", Salary: 26000 },
        { Name: "Janu", Age: 22, Designation: "Backend Developer", Salary: 25000 }
    ]);

const Addemploye=()=>{
setEmployees([...employees,{Name:"New Employee",Age:0,Designation:"",Salary:0}])
};
const Filteredemploye=employees.filter(employees=>{
    return employees.Salary>25000
})

 const deleteEmployee =(index)=>{
let updatedEmployees=[...employees]
updatedEmployees.splice(index,1)
setEmployees(updatedEmployees)
};



return(
     <>
    <h2>Employees</h2>
    <button onClick={()=>Addemploye()}>Addemploye</button>
   {
        employees.map((employee, index) => (
            <div key={index}>
              <p>Name:{employees.Name}</p>
                 <p>Age:{employees.Age}</p>
                 <p>Designation:{employees.Designation}</p>
                 <p>Salary:{employees.Salary}</p>   
                 <button onClick={()=>deleteEmployee(index)}>Delete</button>
                 </div>
         ))
         
         }
            
   </> 
   )

 }

export default Employe