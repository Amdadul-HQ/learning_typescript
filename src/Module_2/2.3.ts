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
    
    type UserObject = {
        name: string,
        address: string,
        age: number
    }
    const user : GenericArray<UserObject> = [
        {
            name: "Rimon",
            address: "Dhaka",
            age: 22
        },
        {
            name: "Hossain",
            address: "Dhaka",
            age: 10
        }
    ]

    type GenericTuple<X, Y> = [X, Y]
    
    interface UserInterface {
        name: string,
        address: string,
        age: number
    }

    type Roll = GenericArray<number>

    const genericTuple: GenericTuple<Roll, UserInterface> = [
        [1, 2, 3, 4, 5], {
            name: "Rimon",
            address: "Dhaka",
            age: 22
        }
    ]

}