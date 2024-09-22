let score: number | string ;

score = 55
score = '35'

type User = {
    id: number
    name: string
}

type Admin = {
    id: number
    username: string
}

let me: User | Admin;

me = {id:1001, name:'Abhishek'}
me = {id:1005, username:'a@a'}

function getUserId(id: number | string){
    // id.toLowerCase() // error

    if(typeof id === 'string'){
        id.toLocaleLowerCase()
    }
}

getUserId(1001)
getUserId('1001')
// getUserId(true) // Argument of type 'boolean' is not assignable to parameter of type 'string | number'.


const data: number[] = [1, 2, 3]

const data2: string[] = ['1', '2', '3']


// Type '(string | number)[]' is not assignable to type 'number[] | string[]'.
// const data3: string[] | number[] = [1, '1'] 

const data4: (string | number) [] = [1, '1'] // no error

let pi: 3.14 = 3.14

// pi = 1.35 // Type '1.35' is not assignable to type '3.14'.

let seatType: 'aisle' | 'middle' | 'window'

seatType = 'middle' // fine
// seatType = 'center' // Type '"center"' is not assignable to type '"aisle" | "middle" | "window"'.