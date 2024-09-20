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




}