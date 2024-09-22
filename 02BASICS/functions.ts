function add(num: number){
    // num.toUpperCase() // error
    return num + 5

    return 'OK' // no error
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
loginUser('Abhishek', 'xyz@test.com') // 3rd parameter will be taken by default as true


// return type is not explicit mentioned, so no error
function getMilege(milege: number){
    if(milege > 35){
        return true
    }
   return '0K'
}

// syntax for arrow function
const calculate = (s: string): string => {
    return 'Calculated'
}

const cars = ['BMW', 'Mercedes', 'Skoda']
cars.map((car: string): string=>{
    return `car is ${car}`
    // return 1 // error
})

// not returning anything
function consoleError(errMsg: string): void{
    console.log(errMsg)
}

// intentional crash, handling exception - return type should be never as per official documentation
function handleError(errMsg: string): never{
   throw new Error(errMsg)
}

export {}