{
    interface Student {
        name: string;
        age: number;
        grades: number[];
    }

    type GradeFunc = (obj: Student) => number
    
    const getAvarage: GradeFunc = (obj) => {
        return obj.grades.reduce((a,b)=> a+b)/obj.grades.length
    }

    const student: Student = {
        name: "Rimon",
        age: 22,
        grades: [60, 70, 75]
    }

    console.log(getAvarage(student));

}