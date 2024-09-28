{
    // abstraction
    // Two way to implement abstraction
    // 1. Interface
    // 2. Abstract Class
    interface Vhicle1 {
        name: string;
        model: number
    }

    class Car implements Vhicle1 {
        name: string
        constructor(name: string) {
            this.name = name
        }
    }
}