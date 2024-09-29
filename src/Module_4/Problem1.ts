{
//     Problem 1:
// Design a TypeScript function repeatString that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.

// // Sample Input: 
// repeatString("Hello!", 3)

// // Sample Output:
    // "Hello!Hello!Hello!"

    type IRepeatString = (str:string,num:number) => string

    const repeatString: IRepeatString = (str:string,num:number):string => {
        return str.repeat(num)
    }   

    console.log(repeatString("Hello!", 4));

}