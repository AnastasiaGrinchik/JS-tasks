//1. Создать 2 объекта: animal и cat, объект animal добавить свойство move, объект cat
// должен наследовать свойство move

// 1-й способ

class Animal {
    constructor(move) {
        this.move = true;
    }
}

class Cat extends Animal {}

let animal = new Animal();
let cat = new Cat();

console.log(cat.move);

// 2-й способ

let Animal = {
    move: true,
};

function Cat(name) {
    this.name = name;
}
Cat.prototype = Animal;

var cat = new Cat('Garfild');
console.log(cat.move);
