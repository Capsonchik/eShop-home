const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

const makeGETRequest = (url, callback) => {
  return new Promise((resolve, reject) => {
    let xhr;

    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { 
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) callback(xhr.responseText)
        else reject('Error')
      }
    }

    xhr.open('GET', url, true);
    xhr.send();
  })
}

class GoodsItem {
  constructor(product_name, price) {
    this.product_name = product_name;
    this.price = price;
  }

  render() {
    return `<div class="goods-item"><img src="https://via.placeholder.com/150x200" alt="test"><h3>${this.product_name}</h3><p>${this.price}</p><button class="push-cart">test</button></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }

  fetchGoods(cb) {
    makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
      this.goods = JSON.parse(goods);
      cb();
    })
  }

  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.product_name, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }

  getTotalSum() {
    const totalSum = this.goods.reduce((acc, item) => {
      if (!item.price) return acc;
      return acc + item.price;
    }, 0);
    console.log(totalSum);
  }
}

const list = new GoodsList();
list.fetchGoods(() => {
  list.render();
});



class Basket extends GoodsList {
  constructor(...args) {
    super(...args);
    this.cartItems = [];
  }

  

  clearAll() {

  }
  // Сделать отдельный массив с товарами корзины
  //! 1.По клику нужно как то получить обьект в котором кнопка
  // кстати как вариант сделать кнопку отдельно в блоке и получать его парент ноду и ее уже кидать в массив ( но это не точно)
  //! 2.Затем запушить обьект в массив
  //! 3. Разметку сформировать так, чтобы в отдельном поле можно было выводить итоговую сумму корзины ( метод уже есть, либо через фор ич его пересчитать) 
  //! 4. В целом не сложно но КАК??????? 
  addItem() {
    document.onclick = event => {
      if (event.target.classList.contains('push-cart')){
        this.cartItems.push
      }
      console.log(this.cartItems)
    }
    

  }

  removeItem() {

  }

  render() {
    return `<div class="goods-item"><img src="https://via.placeholder.com/150x200" alt="test"><h3>${this.product_name}</h3><p>${this.price}</p><button>test</button></div>`;
  }

}

// не забыть убрать 
console.log(list)


const cart = new Basket()
cart.addItem()

class BasketItem extends GoodsItem {
  constructor(...args) {
    super(...args);
    this.count = 0;
  }

  addOne() {}

  removeOne() {}
}

