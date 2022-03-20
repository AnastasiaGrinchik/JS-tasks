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

let animal = {
    move: true,
};

function cat(name) {
    this.name = name;
}
cat.prototype = animal;

let cat_ = new cat('Garfild');
console.log(cat_.move);
