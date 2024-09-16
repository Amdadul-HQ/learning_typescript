{
    // generic of keyof
    type Vhicals = {
        bike: boolean,
        car: boolean,
        plane: boolean,
        train: boolean
    }

    type Owner = keyof Vhicals

    const rimon: Owner = "bike"
    
    const getPropertyValue = <T,Y extends keyof T> (obj:T,key:Y) => {
        return obj[key]
    }

    const result = getPropertyValue({name: "Rimon", age: 22}, "name")
}