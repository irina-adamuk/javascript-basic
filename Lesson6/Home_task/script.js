/*
1. Доработать модуль корзины.
a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида
*/
const catalog = {
   products: [
      {
         id: 1,
         name: 'юбка',
         cost: 1000,
         quantity: 1,
      }, 
      {
         id: 2,
         name: 'платок',
         cost: 300,
         quantity: 1,
      }, 
      {
         id: 3,
         name: 'носки',
         cost: 100,
         quantity: 1,
      }, 
      {
         id: 4,
         name: 'рубашка',
         cost: 1500,
         quantity: 1,
      }, 
      {
         id: 5,
         name: 'брюки',
         cost: 1500,
         quantity: 1,
      }
   ],

   catalogBox: document.querySelector('#catalog'),

   addProductOnPage(product) {
      this.catalogBox.insertAdjacentHTML('beforeend', `<div class = "product">
                        <div class="product__name">Тoвар: ${product.name}</div>
                        <div class="product__cost">Цена: ${product.cost}</div>
                        <div class="product__quantity">Количество: ${product.quantity}</div>
                        <div class="product__amount">Стоимость: ${product.cost * product.quantity}</div>
                        <button class="product__btn" id="${product.id}"><b>Купить</b></button>
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
   // ищем товар по id
   getProductById(productId) {
      for(let value of this.products) {
         if (productId == value.id) {
            return value;
         }
      }
   },

   render() {

      for(let i = 0; i < this.products.length; i++) {
         this.addProductOnPage(this.products[i]);
      } 
   },

};

window.onload = catalog.render();

// сущность корзина
const cart = {
   
   products: [

   ],

   cartBox: document.querySelector('.cart-box'),
   cartBoxInner: document.createElement('div'),

   addProductToCart(product) {
      this.cartBoxInner.insertAdjacentHTML('beforeend', `<div class = "product">
                        <div class="product__name">Товар: ${product.name}</div>
                        <div class="product__cost">Цена: ${product.cost}</div>
                        <div class="product__quantity">Количество: ${product.quantity}</div>
                        <div class="product__amount">Стоимость: ${product.cost * product.quantity}</div>
                     </div>`);
      
   },
   
   getTotalProductQuantity() {
      return this.products.reduce((result, products) => result + products.quantity, 0)
   },

   quantityCount () {
      return this.getTotalProductQuantity() += this.getTotalProductQuantity();
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
         this.cartBox.innerHTML = "";
         this.cartBoxInner.innerHTML = "";

         this.cartBox.appendChild(this.cartBoxInner);
         this.cartBoxInner.classList.add('cart__inner');
         for(let i = 0; i < this.products.length; i++) {
            this.addProductToCart(this.products[i]);
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
   getProductById(productId) {
      for(let value of this.products) {
         if (productId == value.id) {
            return value;
         }
      }
      return null;
   },

   clearCart() {
      this.products = [];
      this.render();
   }
};

let buttonBuy = document.querySelectorAll('.product__btn');
buttonBuy.forEach( function(element) {
      element.addEventListener('click', function(event){
         console.log(event);
         console.log(event.target.id);

         
         let productFromCatalog = catalog.getProductById(event.target.id);
         let productFromCart = cart.getProductById(event.target.id);
         if (productFromCart != null) {
            productFromCart.quantity++;
         } else {
            cart.products.push(Object.assign({}, productFromCatalog));
         }
         
         cart.render();

      });
   });

window.onload = cart.render();
