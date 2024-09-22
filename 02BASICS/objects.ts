const User = {
    name: 'Abhishek',
    email: 'abhishek@abhishek.com',
    isActive: true
}

// function accepting object
function createUser({name: string, isPaid: boolean}){

}
createUser({name:'Abhishek', isPaid: true})
// createUser({name:'Abhishek', isPaid: true, email:'a@a.com'}) // error

let customer = {name:'Abhishek', isPaid: true, email:'a@a.com'}
// createUser(customer) // no error, so not all wierdness of JS is gone

// function returning generic object
function createCar():{}{
    return {name:''}
}

// function returning specific object
function createCourse():{name: string, price: number}{
    return {name:'TypeScript Toolkit', price: 999}
}



// TYPE ALIAS IN TS
type Mystring = string;
type User = {
    name: string;
    email: string;
    isActive: boolean
}

function insertUser(user: User): User{
    return {name:'', email:'', isActive:true}

}
insertUser({name:'', email:'', isActive:true})

export{}