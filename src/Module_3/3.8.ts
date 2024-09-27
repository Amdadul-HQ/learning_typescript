{
    // polymorphism
    
    class Person {
        getSleep() {
            console.log("i am sleeping for 8 hours par day");
        }
    }
    class Student extends Person {
        getSleep() {
            console.log("i am sleeping for 7 hours par day");
        }
    }
    class Developer extends Person { 
        getSleep() {
            console.log("i am sleeping for 6 hours par day");
        }
    }

    const getSleepingHoure = (param: Person)=>{
        param.getSleep()
    }
    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();

    getSleepingHoure(person1)
    getSleepingHoure(person2)
    getSleepingHoure(person3)


    class Shape {
        getArea():number {
            return 0
        }
    }

    class Circle extends Shape {
        radius: number
        constructor(radius: number) {
            super();
            this.radius = radius
        }
        getArea(): number {
            return Math.PI * this.radius * this.radius
        }
    }

    class Rectangle extends Shape {
        height: number
        width: number
        constructor(height: number, width: number) {
            super();
            this.height = height
            this.width = width
        }
        getArea(): number {
            return this.height * this.width
        }
    }

    const getShapeArea = (param: Shape) => {
        return param.getArea()
    }

    const area = getShapeArea(new Circle(10))
    const area2 = getShapeArea(new Rectangle(10, 10))   
    const area3 = getShapeArea(new Rectangle(10, 20))

    console.log('area', area, 'area2', area2, 'area3', area3);


}