var score;
score = 55;
score = '35';
var me;
me = { id: 1001, name: 'Abhishek' };
me = { id: 1005, username: 'a@a' };
function getUserId(id) {
    // id.toLowerCase() // error
    if (typeof id === 'string') {
        id.toLocaleLowerCase();
    }
}
getUserId(1001);
getUserId('1001');
// getUserId(true) // Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
var data = [1, 2, 3];
var data2 = ['1', '2', '3'];
// Type '(string | number)[]' is not assignable to type 'number[] | string[]'.
// const data3: string[] | number[] = [1, '1'] 
var data4 = [1, '1']; // no error
var pi = 3.14;
// pi = 1.35 // Type '1.35' is not assignable to type '3.14'.
var seatType;
seatType = 'middle'; // fine
// seatType = 'center' // Type '"center"' is not assignable to type '"aisle" | "middle" | "window"'.
