// const goods = [
//     { title: 'Shirt', price: 150, },
//     { title: 'Socks', price: 50 },
//     { title: 'Jacket', price: 350 },
//     { title: 'Shoes', price: 250 },
    
//   ];

// /* Функция которая добавляет товары на страницу из GOODS */  

// const renderGoodsList = () => {
//     goods.forEach ((el) => {
//         document.querySelector('.goods-list').insertAdjacentHTML('afterbegin', `<div class="goods-item">
//           <img src="https://via.placeholder.com/150x200" alt="test">
//           <h3>${el.title}</h3>
//           <p>${el.price}</p></div>`)
//         })
//     };
      
// renderGoodsList();

class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  render() {
    return `<div class="goods-item"><img src="https://via.placeholder.com/150x200" alt="test"><h3>${this.title}</h3><p>${this.price}</p></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }

  fetchGoods() {
    this.goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
    ];
  }

  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }


  //  Вроде все работает, запихнуть это дело в корзину с методом рендер
  itemsSum() {
     let result = 0;
     this.goods.forEach(el => {
       let sum = el.price
       result += sum
     })
     document.querySelector('.test-sum').innerHTML = result;  
  }
}
  class renderCart {
    constructor(){

    }
    remooveItem(){

    }

    addItem() {

    }

    render() {

    }

    sort() {

    }

  }

  class cartItem {
    constructor(){
      
    }
    changeSum() {

    }
  }





const list = new GoodsList();
list.fetchGoods();
list.render();
list.itemsSum();
console.log()

