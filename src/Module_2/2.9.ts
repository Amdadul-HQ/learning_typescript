{

    // conditional types

    type A1 = null

    type A2 = undefined

    type A3 = A1 extends null ? true : false

    type A4 = A1 extends null ? true : A2 extends undefined ? undefined : any
    

}