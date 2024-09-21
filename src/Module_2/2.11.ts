{
    // utility type
    // Pick
    type Person = {
        name:string,
        age: number,
        phone: string,
        email?: string
    }

    const age: Pick<Person, "age"> = {
        age:22
    } 

    const nameAge: Pick<Person, "name" | "age"> = {
        name: "rimon",
        age: 22
    }
    // Omit 

    const phone: Omit<Person, "name" | "age"> = {
        phone:"01811111111"
    }


    // Required 
    type PersonRequired = Required<Person>

    // Partial

    type PersonPartial = Partial<Person>
    
    type PersonReadOnly = Readonly<Person>

    const person1: PersonReadOnly = {
        name: "Rimon",
        age: 22,
        phone: "01811111111",
    } 

    // Record Type 
    // type MyObj = {
    //     a: string,
    //     b: number
    // }

    type MyObj = Record<string,string>
    const myObj1: MyObj = {
        a: 's',
        b: '1',
        c: "2",
        d: "3"
    }

    type T = {
        name: string,
        hasbike: boolean,
    }

    type MyObj1 = Record<string, T>
    
    const myobject: MyObj1 = {
        user: {
            name: 'Amdadul',
            hasbike:false
        }
    }




}