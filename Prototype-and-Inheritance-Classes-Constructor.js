//1. Создать 2 объекта: animal и cat, объект animal добавить свойство move, объект cat
// должен наследовать свойство move

// 1-й способ

class animal_ {
    constructor(move) {
        this.move = true;
    }
}

class cat_ extends animal_ {}

let animal = new animal_();
let cat = new cat_();

console.log(cat.move);

// 2-й способ

let animal = {
    move: true,
};

function cat_(name) {
    this.name = name;
}
cat_.prototype = animal;

var cat = new cat_('Garfild');
console.log(cat.move);
