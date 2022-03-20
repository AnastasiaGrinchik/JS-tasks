//1. Дан массив состоящий из названий фильмов, выполните перебор массива с выводом в консоль названия каждого фильма

let arrOfFilms = [
    'Форрест Гамп',
    'Я - легенда',
    'Дом у озера',
    'Социальная сеть',
    'Гарри Поттер',
    'Матрица',
    'Крестный отец',
    'Три метра над уровнем неба',
    'Властелин колец',
    'Один дома',
];

for (i = 0; i < arrOfFilms.length; i++) {
    console.log(arrOfFilms[i]);
}






//2. Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив

let arrOfAuto = [
    'Volkswagen',
    'Toyota Motor',
    'Hyundai-Kia',
    'Ford Motor',
    'Suzuki',
    'Skoda',
];

let arrOfAutoString = arrOfAuto.join(', ');
console.log(arrOfAutoString);

let arrOfAutoArr = arrOfAutoString.split(',');
console.log(arrOfAutoArr);






//3. Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello

let arrOfFriends = [
    'Даша',
    'Саша',
    'Паша',
    'Маша',
    'Леша',
    'Миша',
    'Света',
    'Ира',
];
arrOfFriends = arrOfFriends.map((item) => item + ', hello');
console.log(arrOfFriends);






//4. Преобразовать числовой массив в Boolean

let arrNum = [1, 0, 3, 5, 2, 0, 7];
let arrNumNew = arrNum.map((item) => (item = Boolean(item)));
console.log(arrNumNew);






//5. Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию

let arrNumbers = [1, 6, 7, 8, 3, 4, 5, 6];
arrNumbers.sort((a, b) => b - a);

console.log(arrNumbers);




//6. Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3

let arrOfNumbers = [1, 6, 7, 8, 3, 4, 5, 6];
let numbersGreaterThanZero = arrOfNumbers.filter((item) => item > 3);

console.log(numbersGreaterThanZero);





//7. Написать функцию, которая принимает два параметра - массив и число и выводит индекс
// элемента массива равный числу

let getIndex = function (arr, number) {
    for (i = 0; i < arr.length; i++) {
        if (number === arr[i]) {
            return i;
        }
    }
};

console.log(getIndex(arrOfNumbers, 7));






//8. ﻿Реализовать цикл, который будет выводить число а, пока оно не станет меньше 10

for (let a = 20; a >= 10; a--) {
	console.log(a);
}





//9. Реализовать цикл, который выводит в консоль простые числа

function isPrimeNumber(num) {
    let numberSimple = num;
    let isSimple = true;
    if (num > 1) {
        for (let i = 2; i < numberSimple; i++) {
            if (numberSimple % i == 0) {
                isSimple = false;
                break;
            }
        }   return isSimple;   
    } else {
        isSimple = false;
    }

}

function isSimpleNumbers(arr) {
    arr.forEach((item) => {
        if (isPrimeNumber(item)) {
            console.log(item);
        }
    });
}

isSimpleNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16]);






// 10. Реализовать цикл, который выводит в консоль нечетные числа



let arrRandomNumber = [1, 2, 3, 4, 5, 6, 7, 8, 10];

for (let i = 0; i < arrRandomNumber.length; i++) {
    if (i % 2 > 0) {
        console.log(i);
    }
}
