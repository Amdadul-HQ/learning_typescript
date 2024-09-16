{
    // function with generic
    const createArry = (value: string) : string[] => {
        return [value]
    }
    const createArrayWithGeneric = <T>(value: T) : T[] => {
        return [value]
    }
    interface User {
        name: string,
        address: string,
        age: number
    }
    const userDetails = createArrayWithGeneric<User>({
        name: "Rimon",
        address: "Dhaka",
        age: 22
    })

    const createArrayWithTuple = <T,U> (value1: T, value2: U) : [T, U] => {
        return [value1, value2]
    }

    const result = createArrayWithTuple<string, number>("Rimon", 22)
    


}