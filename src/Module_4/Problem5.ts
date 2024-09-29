{
    interface Student {
        name: string;
        age: number;
        grades: number[];
    }

    type GradeFunc = (obj: Student) => number
    type NumberArray = number[]
    const getAvarage: GradeFunc = (obj: Student) => {
        
        const arr: NumberArray = obj.grades


        return arr.reduce((a,b): number => a+b,0)/obj.grades.length
    }

    const student: Student = {
        name: "Rimon",
        age: 22,
        grades: [60, 70, 75]
    }

    console.log(getAvarage(student));

}