import './App.css';
import goodsArr from './goods.json';
import React, {useState} from 'react';
import Goods from './Goods';
import Cart from './Cart';



function App() {

  const [cart, setCart] = useState({})
  const [count, setCount] = useState(0)

  function addToCart (event) {
    event.preventDefault();
    if (!event.target.classList.contains('add-to-cart')) return false;
    let article = event.target.dataset.key;
    cart[article] ? cart[article]++ : cart[article] = 1
    setCart(cart)
    let newCount = count
    newCount++
    setCount(newCount)
  }

  let showCart;
  if (count !== 0) {
      showCart =  <Cart cart={cart} goods={goodsArr}/>;
  }
  else {
      showCart = 'Empty';
  }

    return (
      <div className="container">
        <h1>Cart</h1>
        <div className="goods-field" onClick={addToCart}>
        {goodsArr.map(item => <Goods title={item.title} cost={item.cost} image={item.image} articul={item.articul} key={item.articul}/>)}
        </div>
        {showCart}
      </div>
    );
  }

export default App;
