
const employee = {

    name:"Dustin",
    streetAddress:"15 Dopeway"
}
;
function updateEmployeeWithKeyAndValue(employee, key, value){;
    return {
        ...employee, 
        [key]: value
         };
    
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){;
    employee.name = "Sam",
    employee.streetAddress = "12 Broadway"
    return employee;
};

function deleteFromEmployeeByKey(employee, key){;
    const newObj = {...employee}
    delete newObj.name
    return newObj;      
    }

function destructivelyDeleteFromEmployeeByKey(employee, key){;
    delete employee.name;
    return employee;
}
// Write your solution in this file
