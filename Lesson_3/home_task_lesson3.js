'use strict'

/*
1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/
nextPrimeNumber:
for (let i = 2; i <= 100; i++) {
   for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrimeNumber;
   }
   console.log(i);
}

/*
2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. 
Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

const cart = [
   ['юбка', 1000, 4],
   ['платок', 300, 7],
   ['носки', 100, 2],
   ['брюки', 2000, 8],
   ['рубашка', 1500, 3],
];




function countBasketPrice() {
   let sum = 0;
   
   for (const item of cart) {
      let amount = item[1] * item[2];
      sum += amount;
      console.log('общая сумма по товару ' + item[0] + ' составила: ' + amount + ' рублей');
   }
   console.log('Общая сумма покупок составила: ' + sum + ' pублей');
}

countBasketPrice();

/*
3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. 
Выглядеть это должно так:
for(…){// здесь пусто}
 */

for(let i = 0; i < 10; console.log(i), i++){
   // здесь пусто
}

/*
4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/

for (let row = 'x', i = 1; i < 21; i++) {
   console.log(row); 
   row = row + 'x';
}