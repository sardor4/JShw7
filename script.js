let num;
do {
    num = +prompt("Какое задание вывести?", 1);
} while (num > 4)
switch (num) {
    case 1: {
        console.log('1 задание  (сумма чисел от 1 до n)\n', ' ');
        let n = +prompt('Введите число');
        let result = n * (n + 1) / 2;
        console.log(result);
        break;
    }
    case 2: {
        console.log('2 задание (сумма чисел Фибоначчи от 0 до n числа)\n', ' ');
        let p = +prompt("Номер элемента ряда Фибоначчи: ");
        let n1 = 0;
        let n2 = 1;
        let n3;
        let arr = [];
        for (let i = 0; i < p - 2; i++) {
            n3 = n1 + n2;
            n1 = n2;
            n2 = n3;
            arr.push(n2);
        }
        let sum = 1;
        for (var i = 0; i < arr.length; i++) {
            sum = sum + parseInt(arr[i]);
        }
        console.log("Значение этого элемента: " + n2);
        console.log("Общая сумма: " + sum);
        break;
    }
    case 3: {
        console.log('3 задание (умножение чисел от n до m)\n', ' ');
        let n = +prompt('Введите число для умножения');
        let m = +prompt('Введите число до которого первое число будет умножаться');
        for (let i = 1; i <= m; i++) {
            res = n * i
            console.log(n + "*" + i + " = " + res);
        }
        break;
    }
    default:
        break;
}
