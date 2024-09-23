const milege: Array<number> = []

const cars: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}

// This could accept and return any data type
function identityTwo(val: any): any {
    return val
}

// once we pass any data type, that data type will be logged
function identityThree<Type>(val: Type): Type {
    return val
}

identityThree(3)
identityThree("3")
identityThree(true)


// Letter T is not mandatory, we can write any alphabet (small letter as well) and that should be same throught the place
function identityFour<T>(val: T): T {
    return val
}

function identityFive<A>(val: A): A {
    return val
}


// Creating own data type
interface Bottle {
    brand: string
    type: number
}

function identitySix<Bottle>(val: Bottle): Bottle {
    return val
}

// return type can be different
function identitySeven<Bottle>(val: Bottle): number {
    return 8
}


function getSearchCars<T>(id: T[]): T {
    return id[3]
}

// Arrow function syntax for generics
const getMoreSearchCars = <T>(id: T[]):T => {
    return id[5]
}

// here comma shows that it is not regular tag, it is generic - optional
const getMoreSearchCar = <T,>(id: T[]):T => {
    return id[5]
}

function anotherFunction<T, U>(val1: T, val2: U):object{
    return{
        val1,
        val2
    }
}
anotherFunction(3, "4")

function anotherFunction2<T, U extends number>(val1: T, val2: U):object{
    return{
        val1,
        val2
    }
}
// anotherFunction2(3, "4") // Error- 2nd parameter must be number not string

interface Database{
    connection: string
    username: string
    password: string
}
function anotherFunction3<T, U extends Database>(val1: T, val2: U):object{
    return{
        val1,
        val2
    }
}
anotherFunction3(1, {connection:'xyz123', username:'a@a', password:'12345'})

interface Quiz{
    name: string
    type: string
}

interface Course{
    name: string
    author: string
    subject: string
}

// For any sellable thing we can add this class to add to cart
class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}