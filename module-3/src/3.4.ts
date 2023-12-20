{
    // 
    // parent
    class Animal {
        name: string;
        species: string

        // constructor
        constructor(name: string, species: string) {
            this.name = name,
                this.species = species
        }
        // method
        makeSound() {
            console.log("I am comman animal")
        }
    };

    // child-1
    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }
        // method
        makeBark() {
            console.log("I am Baring")
        }
    };

    // child-1
    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }
        // method
        makeMaew() {
            console.log("I am Maewing")
        }
    };
    // Smart way handling
    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog
    }
    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat
    };

    const findAnimal = (animal: Animal) => {
        // animal.
        if (isDog(animal)) {
            animal.makeBark()
        } else if (isCat(animal)) {
            animal.makeMaew()
        } else {
            animal.makeSound()
        }
    }

    // instance
    const dog = new Dog("dog bahi", "DOG")
    const cat = new Cat("cat", "CAT")
    // call newAnimal
    findAnimal(cat)












    // 
}