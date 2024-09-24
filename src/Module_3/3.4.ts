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
    const dog = new Dog("Tiger", "Bag");
    // dog.makeBark()

    const cat = new Cat("Peishin", 'cat');
    // cat.makeMeaw()

    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog
    }
    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat
    }

    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        }
        else if (isCat(animal)) {
            animal.makeMeaw();
        }
        else {
            animal.makeSound();
        }
    }
    getAnimal(cat)
    getAnimal(dog)
}