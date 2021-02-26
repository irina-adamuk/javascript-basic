'use strict'
// let goodsCount = 10;
// if (goodsCount > 0) {
//   console.log('количество товара в корзине' + goodsCount);
// } else {
// console.log('корзина пуста. ');
// }

// goodsCount > 0 //условие
//    ? console.log('количество товара в корзине' + goodsCount) // true
//    : console.log('корзина пуста. ') // false


// const result = goodsCount > 0

//   ? 'количество товара в корзине' + goodsCount
//   : 'корзина пуста. '
// console.log(result);

// const good = 'Apples';
// if (good === 'Bananas') {
//   console.log('Стоимость бананов 50р. ');
// } else {
//   if (good === 'Mango') {
//      console.log('Стоимость манго 80р. ');
//  } else {
//      if (good === 'Apples' || good === 'Pear') {
//         console.log('Стоимость яблок и груш 90р. ');
//      } else {
//         console.log('Неизвестный фрукт. ');
//      }
//   }
// }

// if (good === 'Bananas') {
//    console.log('Стоимость бананов 50р. ');
// } else if (good === 'Mango') {
//    console.log('Стоимость манго 80р. ');
// } else if (good === 'Apples' || good === 'Pear') {
//    console.log('Стоимость яблок и груш 90р. ');
// } else {
//    console.log('Неизвестный фрукт. ');
// }

// const good = 'Яблоки';

// switch (good) {
//    case 'Бананы':
//       console.log('Стоимость бананов 50р. ');
//       break;
//    case 'Манго':
//       console.log('Стоимость манго 80р. ');
//       break;
//    case 'Яблоки':
//    case 'Гриши':
//       console.log('Стоимость яблок и груш 90р. ');
//       break;
//    default:
//       console.log('Неизвестный фрукт. ');
// }

// function sayPrice(good) {
//    switch (good) {
//       case 'Бананы':
//          console.log('Стоимость бананов 50р. ');
//          break;
//       case 'Манго':
//          console.log('Стоимость манго 80р. ');
//          break;
//       case 'Яблоки':
//       case 'Гриши':
//          console.log('Стоимость яблок и груш 90р. ');
//          break;
//       default:
//          console.log('Неизвестный фрукт. ');
//    }   
// }


// const good = 'Яблоки';
// function getGoodPrice(good) {
//    switch (good.toLowerCase) {
//       case 'Бананы': return 50;
//       case 'Манго': return 80; 
//       case 'Яблоки':
//       case 'Гриши':
//            return 40;
//       default: return null;
//    }  
// }

// const price = getGoodPrice('Яблоки');
// if (price != null) console.log(price);
// if (typeof price === 'number') console.log(price);

// function getPriceByCount(good, count = 1) {
//    const price = getGoodPrice(good);
//    if (typeof price !== 'number') return null;
//    return price * count;
// }

// console.log(getPriceByCount(good, 4));

// FUNCTION DECLARATION
// функцию можно вызвать до объявления самой функции
// foo();
// function foo() {
//    console.log(123);
// }

// foo();

// FUNCTION EXPRESSION
// Функцию можно вызвать только после ее присвоения 
// const myFoo = foo;
// myFoo();

// function recursion (x) {
//    if (x <= 0 || !Number.isInteger(x)) return 'Задайте целое число большк 0';
//    if (x === 1) return '1';
//    return recursion(x - 1) + ' ' + x;
// }

// console.log(recursion(20));