//1. Получить первую и последнюю буквы строки
let str = "Some Test String";
let first = str[0];
let char = str[str.length -1];
console.log(first, char);


//2. Сделать первую и последнюю буквы в верхнем регистре//
let height = str[0].toUpperCase();
let lower = str[str.length -1].toLowerCase();
console.log(height, lower);

//3. Найти положение слова ‘string’ в строке
let founder = str.indexOf('string');
console.log(founder);

//4. Найти положение второго пробела (“вручную” ничего не считать)
let space1 = str.indexOf(' ');
let space2 = str.indexOf(' ',space1+1);
console.log(space2);

//5. Получить строку с 5-го символа длиной 4 буквы
//let symbol1 = indexOf('5');
//str.length('4');
//console.log();

//6. Получить строку с 5-го по 9-й символы
//let symbol2 = str.slice(5, 4);
//console.log(symbol2);

//7. Получить новую строку из исходной путем удаления последних 6-и символов
//(то есть исходная строка без последних 6и символов)
let newStr = str.slice(0, -6);
console.log(newStr);

//8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
//содержаться текст “2016”
let a = 20;
let b = 16;
let string = a.toString() + b.toString();
console.log(string);