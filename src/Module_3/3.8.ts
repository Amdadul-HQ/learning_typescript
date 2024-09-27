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


}