'use strict';

/*
1. Написать функцию, преобразующую число в объект. 
Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
Например, для числа 245 мы должны получить следующий объект: 
{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
Если число превышает 999, необходимо выдать соответствующее сообщение 
с помощью console.log и вернуть пустой объект.
*/

function getObject(number) {
   let numberObject = {};
   let hundreds = 0;
   let tens = 0;
   let units = 0;

   if (number < 0 || number > 999 || Number.isNaN(number)) {
      alert('Вы ввели неправильное число! Введите число от 0 до 999. ');
      return numberObject;
   }

   if (number >= 100) {
      hundreds = getHundreds(number);

      number = number - (hundreds * 100);

      tens = getTens(number);

      units = number - (tens * 10);

   } else if (number >= 10 && number < 100) {
      tens = getTens(number);

      units = number - (tens * 10);
   } else {
      units = number;
   }
   fillObject(hundreds, tens, units, numberObject);
   return numberObject;
}

let numberFromUser = parseInt(prompt('Введите число от 0 до 999. '));

function getHundreds(number) {
   return parseInt(number / 100);
}

function getTens(number) {
   return parseInt(number / 10);
}

function fillObject(hundreds, tens, units, object) {
   object.hundreds = hundreds;
   object.tens = tens;
   object.units = units;
}


let object = getObject(numberFromUser);
console.log(object);


/*
2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. 
Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

const product1 = {
   name: 'юбка',
   cost: 1000,
   quantity: 4,
}

const product2 = {
   name: 'платок',
   cost: 300,
   quantity: 7,
}

const product3 = {
   name: 'носки',
   cost: 100,
   quantity: 2,
}

const product4 = {
   name: 'брюки',
   cost: 2000,
   quantity: 8,
}

const product5 = {
   name: 'рубашка',
   cost: 1500,
   quantity: 3,
}

const cart = [
   product1, 
   product2, 
   product3, 
   product4, 
   product5
];


function countBasketPrice() {
   let sum = 0;
   for (const product of cart) {
      let amount = product.cost * product.quantity;
      sum += amount;
      console.log('общая сумма по товару ' + product.name + ' составила: ' + amount + ' рублей');
   }
   console.log('Общая сумма покупок составила: ' + sum + ' pублей');
}

countBasketPrice();


