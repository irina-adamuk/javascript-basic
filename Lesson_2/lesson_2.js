'use strict'

//1. Дан код:

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 (к.к здесь используется префиксная форма, то возвращается новое значение)
d = b++; alert(d);           // 1 (здесь используется постфиксная форма, поэтому возвращаеся старое значение переменной)
c = (2+ ++a); alert(c);      // 5 ( в шестой строке ++а это 2, поэтому если мы используем снова ++а , то это уже будет 3 и итог 5)
d = (2+ b++); alert(d);      // 4 ( в седьмой строке возвращается 1 и 1+1=2 + 2 итог 4)
alert(a);                    // 3  по итогам возмой строки а=3
alert(b);                    // 3 по итогам 9 строки b=3; ( обе формы инкремента увеличивают переменную, но возврящают разные значения)
//Почему код даёт именно такие результаты?

//2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
// x будет равен 5 т.к. 2*2 +1 =5

/*
3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. 
Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
*/

let a = -7;
let b = -15;
let result;

if (a >= 0 && b >= 0) {
   result = a - b;
} else if (a < 0 && b < 0) {
   result = a * b;
} else //if (a >= 0 && b < 0 || a < 0 && b >= 0 ) {
   result = a + b;
//}  

alert(result);

/*
4. Присвоить переменной а значение в промежутке [0..15]. 
С помощью оператора switch организовать вывод чисел от a до 15.
*/ 
function getRandomNumber(min, max) {
   return Math.random() * (max - min) + min;
}

let a = Math.floor((getRandomNumber(0, 0.15) * 100));
console.log("Случайное число: " + a);


switch(a) {
   case 0 :
      console.log(a++);
   case 1 :
      console.log(a++);
   case 2 :
      console.log(a++);
   case 3 :
      console.log(a++);
   case 4 :
      console.log(a++);
   case 5 :
      console.log(a++);
   case 6 :
      console.log(a++);
   case 7 :
      console.log(a++);
   case 8 :
      console.log(a++);
   case 9 :
      console.log(a++);
   case 10 :
      console.log(a++);
   case 11 :
      console.log(a++);
   case 12 :
      console.log(a++);
   case 13 :
      console.log(a++);
   case 14 :
      console.log(a++);   
}

/*
5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
Обязательно использовать оператор return.
*/
let result;
const errorMessage = 'Math Error';

function addition(a, b) {
   result = a + b;
   return result;
}

function subtraction (a, b) {
   result = a - b;
   return result;
}

function multiplication (a, b) {
   result = a * b;
   return result;
}

function division (a, b) {
   if (b === 0) {
      result = errorMessage;
   } else {
      result = a / b;
   }
   return result;
}

/*
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
В зависимости от переданного значения операции выполнить одну из арифметических операций 
(использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
*/

function calculate(arg1, arg2, operation) {
   switch(operation) {
      case "plus":
         addition(arg1, arg2);
         break;
      case "minus":
         subtraction(arg1, arg2);
         break;
      case "multiply":
         multiplication(arg1, arg2);
         break;
      case "divide": 
         division(arg1, arg2);
         break;
   }
}

calculate(75, 78 , "divide");
console.log(result);
calculate(75, 78 , "plus");
console.log(result);
calculate(75, 78 , "minus");
console.log(result);
calculate(75, 78 , "multiply");
console.log(result);

/*
7. *Сравнить null и 0. Попробуйте объяснить результат.
*/
console.log( null > 0 );  // (1) false
console.log( null == 0 ); // (2) false
console.log( null >= 0 ); // (3) true

/*
Причина в том, что нестрогое равенство и сравнения > < >= <= работают по-разному. 
Сравнения преобразуют null в число, рассматривая его как 0. 
Поэтому выражение (3) null >= 0 истинно, а null > 0 ложно.

С другой стороны, для нестрогого равенства == значений undefined и null действует особое правило: 
эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому. 
Поэтому (2) null == 0 ложно.
*/

/*
8. *С помощью рекурсии организовать функцию возведения числа в степень. 
Формат: function power(val, pow), где val – заданное число, pow – степень.
*/

function power(val, pow) {
   if ( pow === 1) {
      return val;
   } else {
      return val * power(val, pow - 1);
   }
}

console.log(power(8, 10));

