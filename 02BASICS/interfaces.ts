interface User {
    readonly dbId: number
    email: string
    userId: number
    googleId?: string
    // startTrail: () => string // return type should be string
    startTrail() : string, // will work same as above one

    getCoupon(couponName: string, value: number): number

}

// const abhishek: User = {
//     dbId: 1001,
//     email: 'a@a.com',
//     userId: 1007,
//     startTrail: () =>{
//         return 'Started'
//     },
//     getCoupon: (name: '', off: 500) => {
//         return 88
//     }
// }

// REOPENING OF INTERFACE

interface User {
    githubToken: string
}

const abhishek_anand: User = {
    dbId: 1001,
    email: 'a@a.com',
    userId: 1007,
    startTrail: () =>{
        return 'Started'
    },
    getCoupon: (name: '', off: 500) => {
        return 88
    },
    githubToken: 'xyzqwerty'
}

// INHERITENCE

interface Admin extends User {
    role: string
    salary: 'Monthly' | 'Yearly'
}

const abhishek_admin: Admin = {
    dbId: 1001,
    email: 'a@a.com',
    userId: 1007,
    startTrail: () =>{
        return 'Started'
    },
    getCoupon: (name: '', off: 500) => {
        return 88
    },
    githubToken: 'xyzqwerty',
    role: 'Admin',
    salary: 'Monthly'
}