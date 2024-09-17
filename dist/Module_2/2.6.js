"use strict";
{
    const arrayWithStudent = (student) => {
        const course = "next level web development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student = arrayWithStudent({
        id: 1,
        name: "Rimon",
        age: 22,
        emni: true
    });
    // arrayWithStudent<T extends Student>({ name: "Rimon", age: 22, id: 1 });
    // console.log(arrayWithStudent<T>({ name: "Rimon", age: 22, id: 1 }));
}
