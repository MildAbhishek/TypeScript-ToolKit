function add(num: number){
    // num.toUpperCase() // error
    return num + 2
}

add(5)
// add('5') // error

let name: string;
function getUpperCase(val: string){
    return val.toUpperCase()
}

name = getUpperCase('abhishek')

function signUp(name: string, email: string, isPaid: boolean){
    return 'SignUp User'
}
signUp('Abhishek', 'xyz@test.com', true)

function loginUser(name: string, email: string, isPaid: boolean = true){
    return 'Login User'
}
loginUser('Abhishek', 'xyz@test.com')

function getMilege(){
    
}
export {}