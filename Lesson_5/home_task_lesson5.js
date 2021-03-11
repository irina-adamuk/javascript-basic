'use strict';
/*
1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. 
Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. 
Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
*/
function drawChessBoard() {
   let board = document.createElement('table');
   board.className = "chess-board";

   // Создаем строки
   for (let i = 1; i < 9; i++) {
      let row = document.createElement('tr');
      let numberCell = document.createElement('td');
      numberCell.className = "cell cell-number";
      numberCell.innerHTML = 9 - i;
      row.appendChild(numberCell);
      // Создаем ячейки
      for (let j = 1; j < 9; j++) {
         let cell = document.createElement('td');
         cell.className = "cell";
            if (i%2 == j%2) {
            cell.classList.add("white");
         } else {
            cell.classList.add("black");
         }

         row.appendChild(cell);
      }
      board.appendChild(row);
   }
   
   // Создаем буквы
   let lettersRow = document.createElement('tr');
   let letters = [' ','a','b','c','d','e','f','g','h'];
   board.appendChild(lettersRow);
   // Создаем ячейки с буквами
   for (let n = 0; n < 9; n++) {

      let lettersCell = document.createElement('td');
      lettersCell.className = "cell cell-letters";
      lettersCell.innerHTML = letters[n];
      lettersRow.appendChild(lettersCell);
   }
   
   document.body.appendChild(board);
}

drawChessBoard();

/*
3. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
3.1. Пустая корзина должна выводить строку «Корзина пуста»;
3.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
*/

const cart = {
   
   products: [
      {
         name: 'юбка',
         cost: 1000,
         quantity: 4,
      }, 
      {
         name: 'платок',
         cost: 300,
         quantity: 7,
      }, 
      {
         name: 'носки',
         cost: 100,
         quantity: 2,
      }, 
      {
         name: 'рубашка',
         cost: 1500,
         quantity: 3,
      }, 
      {
         name: 'рубашка',
         cost: 1500,
         quantity: 3,
      }
   ],

   cartBox: document.querySelector('.cart-box'),

   addProductOnPage(product) {
      this.cartBox.insertAdjacentHTML('beforeend', `<div class = "product">
                        <div class="product__name">Наименование: ${product.name}</div>
                        <div class="product__cost">Цена: ${product.cost}</div>
                        <div class="product__quantity">Количество: ${product.quantity}</div>
                        <div class="product__amount">Стоимость: ${product.cost * product.quantity}</div>
                     </div>`);
      
   },
   
   getTotalProductQuantity() {
      return this.products.reduce((result, products) => result + products.quantity, 0)
   },

   getAmountCost() {
      return this.products.reduce((result, products) => result + products.cost, 0);
   },

   getTotalCost() {
   return this.products.reduce((result, products) => result + products.cost * products.quantity, 0);
   },

   render() {
      if (this.getTotalProductQuantity() === 0) {
         this.cartBox.textContent = 'Корзина пуста';

      } else {
         for(let i = 0; i < this.products.length; i++) {
            this.addProductOnPage(this.products[i]);
         }
         
         let messageBox = document.createElement('div');
         messageBox.textContent = `В корзине ${this.getTotalProductQuantity()} товаров на сумму ${this.getTotalCost()} рублей`;
         messageBox.classList.add('cart__message');
         this.cartBox.appendChild(messageBox);
         let cartButton = document.createElement('button');
         this.cartBox.appendChild(cartButton);
         cartButton.classList.add('cart__btn');
         cartButton.textContent = 'очистить корзину';
         cartButton.addEventListener('click', this.clearCart.bind(this));
      }
   },

   clearCart() {
      this.products = [];
      this.render();
   }
};

window.onload = cart.render();