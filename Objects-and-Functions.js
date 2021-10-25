// - Создать объект car, добавить к нему свойство color со значением 'черный'
  
let car = {};
car.color = 'черный';
console.log(car);

// - Изменить свойство color объекта car на 'зеленый'

car.color = 'зеленый';
console.log(car);

// -  В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя

car.powerOfCar = function () {
    console.log('Мощнось двигателя car - 20');
};

console.log(car.powerOfCar);

// - На склад принимают груши и яблоки, напишите функцию, которая возвращает результат сложения количества
// принятых груш и яблок

let sumOfFruits = function (pears, apples) {
    return pears + apples;
};

sumOfFruits(20, 30);

// -  В терминале оплаты сохранено ваше имя, напишите функцию для определения имени в терминале(если вы ввели
// ваше имя, то привет + имя, если нет, то нет такого имени)

let nameDefinition = function (name) {
    if ((name === 'Настя')) {
        console.log('Привет, Настя');
    } else {
        console.log('Такого имени нет');
    }
};

nameDefinition('Настя');

// - Напишите функцию вычисления типа аргумента и вывод типа в консоль

let typeDefinition = function (argument) {
    console.log("Введенный вами аргумент имеет тип "+ typeof argument);
};

typeDefinition('hhh');

// - Напишите функцию, которая определяет является ли число простым или нет

let isPrimeNumber = function (number) {
    let isSimple = 'Число является простым';
    if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isSimple = 'Число не является простым';
                break;
            }
        }
    } else {
        isSimple = 'Число не является простым';
    }
    console.log(isSimple);
};

isPrimeNumber(11);
