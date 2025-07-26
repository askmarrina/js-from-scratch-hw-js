// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(a) {
    if(a % 2 === 1) {
        console.log('число нечетное')
    } else {
        console.log('число четное')
    }
    return a;
}

console.log(isEven(10))