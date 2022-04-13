import React from 'react'

function Cart(props) {

    function renderObj () { 
        let out = [];
        for (let key in props.cart) {
            let goods = getGoodsFromArr(key);
            // console.log(goods);
            out.push(
            <tr key={key}>
                <td>{goods['title']}</td>
                <td>{props.cart[key]}</td>
                <td>{props.cart[key]*goods['cost']}</td>
            </tr>);
        }
        return out;
        }
    
    
        function getGoodsFromArr (art) {
        for (let i = 0; i < props.goods.length; i++) {
            if (art === props.goods[i]['articul']){
                return props.goods[i];
            }
        }
    }


    return (
        <div className="cart-field">
            <h1>Корзина</h1>
            <table>
                <tbody>
                <tr><th>Art</th><th>Count</th><th>Cost</th></tr>        
                { renderObj() }
                </tbody>
            </table>
        </div>
    )
}

export default Cart