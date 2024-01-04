import React, { useState } from 'react'
import { productsData } from '../data/productsData'
import ProductsHeader from './ProductsHeader';
import Cart from './Cart';

function ProductsPage() {
    const [products, setproducts] = useState(productsData)
    const [cart, setcart] = useState([])


    const removeProduct = (id) => {
        const filteredProducts = products.filter(q => q.id != id);
        setproducts(filteredProducts);
    }

    let totalPrice = 0
    products.forEach(item => {
        totalPrice += item.unitPrice
    })

    let averagePrice = totalPrice / products.length


    const addToCart = (product) => {

        var item = cart.find(q => q.id == product.id)

        if (item) {
            item.quantity = item.quantity + 1
            setcart([...cart])
        }
        else {
            let newCartItem = {
                id: product.id,
                quantity: 1,
                name: product.name,
                unitPrice: product.unitPrice
            }

            setcart([...cart, newCartItem])
        }
    }


    const empty = () => {
        setcart([])
    }

    const removeItem = (id) => {
        const filteredCart = cart.filter(q => q.id != id);
        setcart(filteredCart);
    }

    return (<>
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <ProductsHeader totalPrice={totalPrice} averagePrice={averagePrice} productsLength={products.length} />
            <Cart productsOfCart={cart} empty={empty} removeItem={removeItem} />
        </div>

        <table className='w3-table w3-striped'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Unit Price</th>
                    <th>Units In Stock</th>
                    <th>Delete</th>
                    <th>Add To Cart</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.unitPrice.toFixed(2)}</td>
                            <td>{product.unitsInStock}</td>
                            <td><button onClick={() => removeProduct(product.id)}>Delete</button></td>
                            <td><button onClick={() => addToCart(product)}>Add to cart</button> </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>)
}

export default ProductsPage



// let cart = [
//     {
//         id:1,
//         quantity:2,
//         unitPrice:500
//     },
//     {
//         id:6,
//         quantity:3,
//         unitPrice:100
//     }
// ]