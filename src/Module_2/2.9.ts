{

    // conditional types

    type A1 = null

    type A2 = undefined

    type A3 = A1 extends null ? true : false

    type A4 = A1 extends null ? true : A2 extends undefined ? undefined : any

    type Shek = {
        bike: string,
        car: string,
        ship: string,
    }

    type CheckVichials<T> = T extends keyof Shek ? true : false

    type HasBike = CheckVichials<"bike">

    type HasPlane = CheckVichials<"plane">
    
    

}