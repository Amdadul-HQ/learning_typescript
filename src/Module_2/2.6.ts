{


    const arrayWithStudent = <T extends Student >(student: T) : T & {course:string} => {
        const course = "next level web development";
        return {...student, course}
    }

    interface Student {
        id: number,
        name: string,
        age: number,
    }

    const student = arrayWithStudent({
        id: 1,
        name: "Rimon",
        age: 22,
        emni: true
    })

    // arrayWithStudent<T extends Student>({ name: "Rimon", age: 22, id: 1 });
    
    // console.log(arrayWithStudent<T>({ name: "Rimon", age: 22, id: 1 }));

}