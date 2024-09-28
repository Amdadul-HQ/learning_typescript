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
        startEngine(): void {
            console.log('Car start engine');
        }

        stopEngine(): void {
            console.log('Car stop engine');
        }

        drive(): void {
            console.log('Car drive');
        }
        tast(): void {
            console.log('Car tast');
         }
    }

    const vhicle = new Car();
    vhicle.startEngine();

    // abstract class
    abstract class Car2 {
      abstract startEngine(): void 

      abstract stopEngine(): void 

      abstract drive(): void 
      abstract tast(): void 
    }

    class ToyotaCar extends Car2{
        startEngine(): void {
            console.log('ToyotaCar start engine');
        }

        stopEngine(): void {
            console.log('ToyotaCar stop engine');
        }

        drive(): void {
            console.log('ToyotaCar drive');
        }
        tast(): void {
            console.log('ToyotaCar tast');
         }
    }

    const hondaCar = new ToyotaCar();
    hondaCar.startEngine();
    hondaCar.stopEngine();
    hondaCar.drive();
    hondaCar.tast();



}