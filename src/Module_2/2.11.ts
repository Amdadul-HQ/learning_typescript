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


}