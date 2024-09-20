{
    // utility type
    // Pick
    type Person = {
        name:string,
        age: number,
        phone:string
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


}