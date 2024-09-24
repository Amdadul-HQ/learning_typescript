{

    // instance of gaurd
    class Animal {
        name: string;
        spices: string;

        constructor(name: string, spices: string) {
            this.name = name;
            this.spices = spices;   
        }

        makeSound() {
            console.log('I am making sound');
        }
    }

    class Dog extends Animal {
        constructor(name: string, spices: string) {
            super(name, spices);
        }
         
        makeBark() {
            console.log("I am barking");
        }
    }
    class Cat extends Animal {
        constructor(name: string, spices: string) {
            super(name, spices);
        }
         
        makeMeaw() {
            console.log("I am meawing");
        }
    }

}