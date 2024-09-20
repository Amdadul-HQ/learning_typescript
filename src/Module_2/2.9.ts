{

    // conditional types

    interface User {
        car: boolean
        bike: boolean
        plane: boolean
        train: boolean
    }

    type Vechials = keyof User

    const rimon: Vechials = "car"
    
    const rimonhas: Vechials = "bike"

    type T = {
        name: string,
        age: number,
        address: string,
    }
    
    const createGeniricArray = <T>(value : T) : T[] => {
        return [value]
    }
    

}