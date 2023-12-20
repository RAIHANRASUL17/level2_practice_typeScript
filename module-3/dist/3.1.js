"use strict";
// class Animal {
//     // parameter
//     name: string;
//     species: string;
//     sound: string
//     // constructor
//     constructor(name:string, species: string, sound:string){
//         this.name=name,
//         this.species=species
//         this.sound = sound
//     }
//     // method
//     makeSound(){
//         console.log(`The animal ${this.name} SPecies ${this.species} and Sound ${this.sound}`)
//     }
// };
// // constance
// const dog = new Animal("german shepar", "DOG", "Ghew Ghew")
// const cat = new Animal("krinki Cat", "CAT", "meaw meaw")
// // call 
// dog.makeSound()
// cat.makeSound()
class Animal {
    // parameter
    // constructor
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    // method
    makeSound() {
        console.log(`The animal ${this.name} SPecies ${this.species} and Sound ${this.sound}`);
    }
}
;
// constance
const dog = new Animal("german shepar", "DOG", "Ghew Ghew");
const cat = new Animal("krinki Cat", "CAT", "meaw meaw");
// call 
dog.makeSound();
cat.makeSound();
