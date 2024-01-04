import React from 'react'

function Cart({ productsOfCart, empty, removeItem }) {
    console.log("Cart component rendered");

    let cartTotalPrice = 0

    productsOfCart.forEach(item => {
        cartTotalPrice += item.quantity * item.unitPrice
    }
    )


    return (<>
        <div>
            <h3>Cart Length: {productsOfCart.length}</h3>
            <h3>Cart Total Price: {cartTotalPrice.toFixed(2)}</h3>
            <button onClick={empty}>Empty</button>
            <ul>
                {
                    productsOfCart.map(item => {
                        return <>
                            <CartItem removeItem={removeItem} item={item} />
                        </>
                    })
                }
            </ul>
        </div>

    </>
    )
}

export default Cart

function CartItem({ item, removeItem }) {

    return <li style={{ margin: 10 }}>{item.name} - {item.quantity} * {item.unitPrice.toFixed(2)} = {(item.quantity * item.unitPrice).toFixed(2)}
        <button style={{ marginLeft: 10 }} onClick={() => removeItem(item.id)}>Remove</button>
    </li>
}