/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(string) {
    const words = string.split(' ');
    let result = words.map(word => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    // console.log(capitalizeWords);

    return result.join(' ');
}
console.log(capitalizeWords('heLlo wOrld frOm javasCript'))




// console.log(capitalizeWords('hello world from javascript'))
//
// const string = 'hello world from javascript';
// const words = string.split(' ');
//
// const capitalizeWords = words.map(word => {
//     return word[0].toUpperCase() + word.slice(1).toLowerCase();
// })
// console.log(capitalizeWords);
// let result = capitalizeWords.join(' ');
// console.log(result);





// for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     // console.log(word);
//     // console.log(word[0])
//     let capitalizeWord = word[0].toUpperCase()+word.slice(1)
//     // console.log(capitalizeWord);
//     // let result = capitalizeWord.join(" ")
//     // console.log(result)
// }


