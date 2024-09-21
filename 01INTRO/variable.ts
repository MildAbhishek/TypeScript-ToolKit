let greetings: string = 'Hi Abhishek'

console.log(greetings)

// number
let userId: number = 12345.77

// boolean
let isLoggedIn: boolean = false


// any

let car: string;

function getCar(){
    return 'BMW'
    // return true // error
}

car = getCar() // return type of this function must be string
export {}