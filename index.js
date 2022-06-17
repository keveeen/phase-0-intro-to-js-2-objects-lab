const employee = {

    name: 'Thom',
    streetAddress: '2222 London' 
}

function updateEmployeeWithKeyandValue(obj, key, value){

    return {...obj,[key]: value}



}

const newEmployee = updateEmployeeWithKeyandValue(employee, 'Sam', '11 Broadway')


