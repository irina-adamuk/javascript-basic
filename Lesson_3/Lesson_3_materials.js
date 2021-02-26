'use strict'
// let i = 0;
//
// while(i < 10) {
//    console.log(i);
//    i++;
// }
//
//
// let i = 10;
// do {
//       console.log(i);
//       i++;
// } while(i < 3);
//
//
// for (var i = 0; i < 3; i++) {
//    console.log(i);
// }

// console.log(i);
//
//
// for (let i = 0; i < 3; i++) {
//    console.log(i);
// }

// ? console.log(i); будет ошибка т.к. переменную let не видно за циклом;

// while (true) {
//   ...
// }
//
//
// do {
// ...
// } while (true);

// for (; ;) {
//   ...
// }

/* 
for (let i = 0; ; i++) {
   if (i > 10) break; // выход из цикла 
   if (i % 2 === 1) continue; // завершение итерации
   console.log(i);
}

outerLoop: for (let a = 0; a < 3; a++) {
   console.log('Upper cycle is running');
   for (let b = 0; b < 3; b++) {
      console.log('Inner cycle is running');
      if (b >= 1) {
         console.log('Breaking inner cycle');
         break outerLoop;
      }
   }
}

*/
