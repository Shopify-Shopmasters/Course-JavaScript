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



//№1 Математические операторы
//Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.
const apples = 47;
const grapes = 135;
const total = apples + grapes;
console.log(total);
const diff = apples - grapes;
console.log(diff);

//№2 Приоритет операторов
//Разбери приоритет операторов в инструкции присвоения значения переменной result.
const result = 108 + 223 - 2 * 5;
console.log(result);

//№3 Класс Math
//Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения переменной value. Используй методы Math.floor(), Math.ceil() и Math.round(). Проверь что будет в консоли при значениях 27.3 и 27.9.
const value = 27.5;
const valueHigh = Math.round(value);
console.log(valueHigh);

const valueDown = Math.floor(value);
console.log(valueDown);

const valueCeil = Math.ceil(value);
console.log(valueCeil);

//№4 Шаблонные строки
//Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку.
const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const botsSum = repairBots + defenceBots;
const message = `${companyName} has ${botsSum} bots in stock`;
console.log(message); // "Cyberdyne Systems has 200 bots in stock"

//№5 Методы строк и чейнинг
let weight = '88.3';
let height = '1.75';

weight = Number(weight);
height = Number(height);

const bmi = weight / (height * height);
const fixedBmi = bmi.toFixed(1);
console.log(fixedBmi);

//№6
let nomNegative = 1;
let nomCheck = isNaN(nomNegative);
console.log(nomCheck);

let firstWord = "Wow";
let secondWord = "Interesting";
let firstWordLetter = firstWord[0];
let secondWordLetter = secondWord[0];
let chooseWord = firstWordLetter == secondWordLetter;
console.log(chooseWord);




