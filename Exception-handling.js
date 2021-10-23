// В try catch конструкцию завернуть код: console.log(a), let a = 3. И вывести ошибку – ‘let перед
//  использованием нужно объявить’. При выполнении 1/0  выводить ошибку 'на ноль делить нельзя'

try {
    console.log(a);
    let a = 3;
} catch (err) {
    alert('let перед использованием нужно объявить');
}

try {
    let b;
    b = 1 / 0;
    if (b === Infinity) {
        throw new Error('На ноль делить нельзя.');
    }
} catch (err) {
    alert('Ошибка! ' + err.message);
}
