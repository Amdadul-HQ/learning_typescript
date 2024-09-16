// function add(number1 : number, number2 :number) : number {
//     return number1 + number2
// }

// add(1, 10)

type Add = {
    (number1:number,number2 :number) : number
}


const add :Add = (number1, number2) => number1 + number2;


