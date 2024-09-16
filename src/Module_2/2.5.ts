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

}