const myarray = []
// myarray.push(1)// error


const cars: string[] = ['BMW', 'Mercedes']

const milege: number[] = [10, 12]

const kmDriven: Array<number> = [33235,12450]

type User = {
    name: string
    isLoggedIn: boolean
}

const allUser: User[] = []

allUser.push({name:'Abhishek', isLoggedIn: false})

const MLModels: number[][] = [
    [255, 255, 255]
]

MLModels.push([1, 2])