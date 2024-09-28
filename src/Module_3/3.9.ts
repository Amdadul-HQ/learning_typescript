{
    // abstraction
    // Two way to implement abstraction
    // 1. Interface
    // 2. Abstract Class
    interface Vhicle1 {
        startEngine(): void
        stopEngine(): void
        drive(): void
    }

    class Car implements Vhicle1 {
   
    }

}