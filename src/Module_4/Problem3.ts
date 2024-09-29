{
//     Problem 3:
// Create a TypeScript function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers from the original array.

// // Sample Input:
// filterEvenNumbers([1, 2, 3, 4, 5, 6])

// // Sample Output:
    // [2, 4, 6]
    
    type Arry = number[]

    type EvenFunction = (arr: Arry) => Arry
    
    const filterEvenNumbers: EvenFunction = (arr) => {
        return arr.filter((num) => num % 2 === 0)
    }

    const arr : Arry = [1, 2, 3, 4, 5, 6]

    console.log(filterEvenNumbers(arr));


}