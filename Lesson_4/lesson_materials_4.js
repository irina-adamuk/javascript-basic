'use strict';
/*
// ? Материалы учебника
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

// ? Материалы урока
/*
function getPropName(prop) {
   return 'testing new proper ' + prop;
}
const myCar = {
   manufacture: 'Toyota',
   color: 'black',
   'model og engine': 'w200',
   [getPropName('test')]: 2,
}
myCar.newProp = 'add';
myCar['name'] = 'ghjk';
console.log(myCar);

*/
/*
const myCar = {
   manufacture: 'BMW',
   color: 'Blue',
   engine: {
      power: 300,
      code: 'xxxxx',
   },
   posibleColors: ['black', 'white', 'brown', 'gray'],
   // beep: function () {
   //   console.log('Beep!');
   // }
   beep() {
      console.log('Beep!');
   },
};

for (let i = 0; i < myCar.posibleColors.length; i++) {
   console.log(myCar.posibleColors[i]);
}
*/

// ? ***************************************************
// console.log(Object.keys(myCar));

// ? этот метод пробежится по всему объекту и консоль выведет названия всех свойств

// ! возвращает те свойства, которые присущи конкретно этому объекту 
 // console.log(Object.getOwnPropertyNames(myCar));

/*
for( const prop in myCar) {
   console.log('свойство: ', prop , 'значение: ', myCar[prop]);
}
*/

/*

function inc(a) {
   a++;
}

let a = 1;

inc(a);
console.log(a);
*/
/*
// ? В этом примере ссылка на объект, поэтому в консоль выведется 6
const obj = {
   num: 5,
};

function inc(obj) {
   obj.num++;
}

inc(obj);
console.log(obj.num);
*/


// ! В этом примере объект копируется, поэтому в самом объекте obj ничего не изменится
/*
const obj = {
   num: 5,
};

function inc(obj) {
   const objCopy = Object.assign({}, obj);
   objCopy.num++;
   console.log(objCopy.num);
}

inc(obj);
console.log(obj.num);
*/

/*
function getObject() {
   return {
      number: 5,
      sayNumber() {
         console.log('Номер в объекте: ', this.number);
      }
   }
}

const myObject = getObject();
console.log(myObject);

const mySayNumber = myObject.sayNumber;

myObject.sayNumber();
*/

// ? Проверка есть ли свойство в объекте. Эта конструкция вернет либо true  либо false

// console.log('number' in myObject);

