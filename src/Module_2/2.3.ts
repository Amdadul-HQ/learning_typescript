{
    // generic type
    const roll: number[] = [1, 2, 3, 4, 5]

    const roll2: Array<number> = [1, 2, 3, 4, 5]
    
    const names1: string[] = ["Rimon", "Hossain", "Rafsan"]
    const names2: Array<string> = ["Rimon", "Hossain", "Rafsan"]
    
    type GenericArray<T> = Array<T>

    const arryNumber: GenericArray<number> = [1, 2, 3, 4, 5]

    const arryString: GenericArray<string> = ["Rimon", "Hossain", "Rafsan"]

    const arryBool: GenericArray<boolean> = [true, false, true]
    

}