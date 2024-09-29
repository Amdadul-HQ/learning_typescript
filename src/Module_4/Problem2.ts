{
// Problem 2:
// Design a TypeScript function findLargestNumber that takes an array of numbers and returns the largest number in the array.

// // Sample Input:
// findLargestNumber([10, 5, 8, 20, 3])

// // Sample Output:
    // 20
    

    type Array = number[]

    type FindLargestNumber = (arr: Array) => number

    const findLargestNumber : FindLargestNumber = (arr)  => {
        return Math.max(...arr)
    }

    const arr: Array = [10, 5, 8, 30, 3]

    console.log(findLargestNumber(arr))


}