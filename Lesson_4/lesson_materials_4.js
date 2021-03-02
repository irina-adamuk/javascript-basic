'use strict';
/*
let greetings = {
   vasya: "Hello vasya",
   ira: "Privet Ira",
   kirill: "zdorova!",
   guest: "Zdravstvyi neznakometz!"
   }

let ktoKoMnePrishel = prompt("Ti kto?", "Vvedi svoe imya");

   if (greetings[ktoKoMnePrishel] == undefined) {
   alert(greetings.guest);
   alert(greetings['guest']);
   } else {
   alert(greetings[ktoKoMnePrishel]);
   }
   */

/*
let schedule = {};

function isEmpty(obj) {
   for (let key in obj) {
      // если тело цикла начнет выполняться - значит в объекте есть свойства
      return false;
   }
   return true;
}

alert( isEmpty(schedule));
scheldule['8:30'] = 'get up';

alert( isEmpty(scheldule));
*/

/*
let salaries = {
   John: 100,
   Ann: 160,
   Pete: 130
}

let sum = 0;
for(let key in salaries) {
   sum += salaries[key];
}
console.log(sum);
*/


/*
// до вызова функции
let menu = {
   width: 200,
   height: 300,
   title: "My menu"
   };

   function multiplyNumeric(obj) {
      for (let key in obj) {
         if (typeof obj[key] == 'number') {
          obj[key] *= 2;
         }
      }
   }

   multiplyNumeric(menu);

 // после вызова функции

menu = {
   width: 400,
   height: 600,
   title: "My menu"
   };
*/

/*
let calculator = {
   sum() {
      return this.a + this.b;
   },

   mul() {
      return this.a * this.b;
   },

   read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
   }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

/*

let ladder = {
   step: 0,
   up() {
      this.step++;
      return this;
   },
   down() {
      this.step--;
      return this;
      },
   showStep() {
      alert( this.step );
      return this;
   }
}

ladder.up().up().down().up().down().showStep(); // 1
ladder
   .up()
   .up()
   .down()
   .up()
   .down()
   .showStep(); // 1
*/
