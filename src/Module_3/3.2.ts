{
    // inheritance
    class Parant {
        name: string;
        age: number;
        childrenName: string;
        constructor(name: string, age: number, childrenName: string) {
            this.name = name;
            this.age = age;
            this.childrenName = childrenName
        }
        getSleep(numberOfHours: number) {
            console.log(`${this.name} will sleep for ${numberOfHours} hours`);
        }
    }

    class Children extends Parant {
        // super(childrenName:, age, name);
        // constructor(name: string, age: number, childrenName: string) {
            
        // }
        class: string;
        constructor(name: string, age: number, childrenName: string, classs: string) {
            super(name, age, childrenName);
            this.class = classs
        }

        getSleep(numberOfHours: number) {
            console.log(`${this.childrenName} son of ${this.name} will sleep for ${numberOfHours} hours`);
        }

    }

    const children = new Children("Rimon", 22, "Amdad", "10th")
    children.getSleep(8)
    class Student  {
        name: string;
            age: number;
            class: string;
        constructor(name: string, age: number, classs: string) {
            this.name = name;
            this.age = age;
            this.class = classs
        }
        getSleep(numberOfHours: number) {
            console.log(`${this.name} will sleep for ${numberOfHours} hours`);
        }
    }
    // const student1 = new Student("Rimon", 22, "10th");
    // student1.getSleep(8)
}