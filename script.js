// const goods = [
//     { title: 'Shirt', price: 150, },
//     { title: 'Socks', price: 50 },
//     { title: 'Jacket', price: 350 },
//     { title: 'Shoes', price: 250 },
//   ];
  
//   const renderGoodsItem = (title, price) => {
//     return `<div class="goods-item">
//             <img src="https://via.placeholder.com/150x200" alt="test">
//             <h3>${title}</h3>
//             <p>${price}</p></div>`;
//   };
  
//   const renderGoodsList = (list) => {
//     let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
//     document.querySelector('.goods-list').innerHTML = goodsList;
//   }
  
//   renderGoodsList(goods);

const goods = [
    { title: 'Shirt', price: 150, },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    
  ];

// const renderGoodsItem = (title, price) => {
//     return `<div class="goods-item">
//             <img src="https://via.placeholder.com/150x200" alt="test">
//             <h3>${title}</h3>
//             <p>${price}</p></div>`;
//   };

//   goods.forEach (function (el) {
//       document.querySelector('.goods-list').insertAdjacentHTML('afterbegin', `<div class="goods-item">
//       <img src="https://via.placeholder.com/150x200" alt="test">
//       <h3>${el.title}</h3>
//       <p>${el.price}</p></div>`)
//   })

goods.forEach ((el) => {
    document.querySelector('.goods-list').insertAdjacentHTML('afterbegin', `<div class="goods-item">
      <img src="https://via.placeholder.com/150x200" alt="test">
      <h3>${el.title}</h3>
      <p>${el.price}</p></div>`)
})
