const arrayString: [string, string,rest:number] = ["Rimon", "Hossain"]
const arrayNumber: number[] = [1, 2, 3, 4]

console.log(arrayString)

arrayString.push(...arrayNumber)