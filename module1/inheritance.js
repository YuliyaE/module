function Animal(name){
    this.name = name;
}

Animal.prototype.makeSound = function(){
    console.log(this.name + " says psh...")
};

function Dog(name){
    this.name = name;
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.makeSound = function(){
    console.log(this.name + " says woow")
};

let dog = new Dog("Sharick");

dog.makeSound();
