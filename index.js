// Write your solution in this file!
    const employee ={
        name: "Sam",
        streetAddress: "1234"
    }

    function updateEmployeeWithKeyAndValue(employee, key, value){
        const newObj = {...employee}

        newObj[key] = value;

        return newObj;
    }

    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
        return Object.assign(employee, { [key]: value });

    }

    function deleteFromEmployeeByKey(employee, key){
        const newObj = {...employee}

        delete newObj[key]

        return newObj;
    }

    function destructivelyDeleteFromEmployeeByKey(employee, key){
        delete employee[key]
        return employee
    }