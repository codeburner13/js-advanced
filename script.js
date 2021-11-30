const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];
const renderGoodsItem = (title = "socks", price = 666) =>
    `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
const renderGoodsList = () => {
    let goodsList = goods.map((item) => {
        return renderGoodsItem(item.title, item.price);
    });
    document.querySelector('.goods-list').innerHTML = goodsList;
}
renderGoodsList(goods);

/*
//2-ой пункт дз
const goods = [0];
const renderGoodsItem = (title = "socks", price = 200) =>
    `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
const renderGoodsList = () => {
    let goodsList = goods.map((item) => {
        return renderGoodsItem(item.title, item.price);
    });
    document.querySelector('.goods-list').innerHTML = goodsList;
}
renderGoodsList(goods);
*/

//1-ый пункт дз
const headEr = document.querySelector('header');
headEr.style.cssText = ` display: flex;
justify-content: right;
border: 1px solid black;
padding: 20px 20px 20px 0;
background-color: rgb(168, 166, 166);`

const butt = document.querySelector('button.cart-button');
butt.style.cssText = `font-size: 20px;
color: black;
border-radius: 20px;
padding: 6px;`

const productList = document.querySelector('.goods-list');
productList.style.cssText = `border: 1px solid black;
display: flex;
justify-content: space-between;
padding: 100px 150px;
background-color: rgb(204, 200, 200)`

document.querySelectorAll('.goods-item').forEach(products => products.style.cssText = `border: 1px solid black;
width: 100px;
height: 120px;
text-align: center;
font-size: 20px`);

//3-ий пункт дз
document.querySelector('.goods-list').childNodes.forEach(node => {
    if (node.nodeName === '#text') {
        node.remove();
    }
});


