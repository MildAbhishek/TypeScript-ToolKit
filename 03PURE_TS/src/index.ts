// Classes in TS

class User{
    name: string
    readonly email: string
    city: string = ''
    private mobile: number

    constructor(name: string, email: string){
        this.name = name;
        this.email = email
        this.mobile = 1234567890
    }
}

const Abhishek = new User('abhishek', 'a@a.com')
Abhishek.city= 'Delhi'
// Abhishek.email = 'a@z.com' // Cannot assign to 'email' because it is a read-only property.
// Abhishek.mobile = 0123456789 // Property 'mobile' is private and only accessible within class 'User'.


class Car {
    private _milege: number= 0;

    protected _engine: string = 'cc' // it can be accessed by subclass

    constructor(public name: string, public color: string){
        this.name = name
        this.color = color
    }

    get milege(): string{
        return `color-${this._milege}`
    }

    set milege(value: number) { // setter must not have any return type
        if(value <= 0){
            throw new Error('Milege can\'t be 0')
        }
        this._milege = value
    }  
}

const car = new Car('BMW', 'RED')

// car._milege; // error- Property '_milege' is private and only accessible within class 'Car'.


class SubCar extends Car { // It can't access private field of parent class
    
    isFamily: boolean = true
    
    changeCourseCount(){
        // this._milege = 35 // error-Property '_milege' does not exist on type 'SubUser'.
    }

    changeEngine(){
        this._engine = 'CC'
    }
}

let myCar = new SubCar('MERCEDES', 'BLACK')

console.log(myCar.changeEngine())