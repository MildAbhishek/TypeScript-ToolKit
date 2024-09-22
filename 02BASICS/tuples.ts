//  Order of entries in array is not restricted99

const user: (string | number)[] = [1, 'A']

// Order of entries of array is restricted
let tUser: [string, number, boolean]
tUser = ['A', 1001, true]

let rgb: [number, number, number] = [255, 125, 210]

type User= [number, string]

const newUser: User = [1001, 'Abhishek']

// newUser[1] = 10 // Type 'number' is not assignable to type 'string'.
// newUser.push(true) // Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

