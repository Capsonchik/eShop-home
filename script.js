const goods = [
    { title: 'Shirt', price: 150, },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    
  ];

/* Функция которая добавляет товары на страницу из GOODS */  

const renderGoodsList = () => {
    goods.forEach ((el) => {
        document.querySelector('.goods-list').insertAdjacentHTML('afterbegin', `<div class="goods-item">
          <img src="https://via.placeholder.com/150x200" alt="test">
          <h3>${el.title}</h3>
          <p>${el.price}</p></div>`)
        })
    };
      
renderGoodsList();