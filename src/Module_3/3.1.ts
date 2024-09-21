{
    // 
    class Animal {
        name: string;
        spices: string;
        sound: string;

        constructor(name: string, spices: string, sound: string) {
            this.name = name;
            this.spices = spices;
            this.sound = sound;
        }

        makeSound() {
            console.log(`The ${this.spices} name is ${this.name}.And says ${this.sound}`);
        }
    }


    const dog = new Animal("Tiger", "Bag", "Ghew Ghew")
    dog.makeSound()
    const cat = new Animal("Peishin",'cat',"mew mew")
}