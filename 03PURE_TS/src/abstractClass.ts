abstract class TakePhoto{
    constructor(public cameraMode: string, public filter: string){

    }

    abstract getSepia(): void // only declaration not definition

    getReelTime(): number {
        return 30
    }
}

// abstract class may contain abstract and non abstract method

class Instagrams extends TakePhoto{
    constructor(public cameraMode: string, public filter: string, public burst: number){
        super(cameraMode, filter)
    }

    getSepia(){ // abstract method implemented
        console.log('Sepia')
    }

    // optional- overriding the method of abstract class
    getReelTime(): number {
        return 50
    }

}

let insta = new Instagrams('HD', 'Sepia', 30)

insta.getReelTime() // 50