import React, { useState } from 'react'
import { productsData } from '../data/productsData'
import ProductsHeader from './ProductsHeader';

function ProductsPage() {
    const [products, setproducts] = useState(productsData)


    const removeProduct = (id) => {
        const filteredProducts = products.filter(q => q.id != id);
        setproducts(filteredProducts);
    }

    let totalPrice = 0
    products.forEach(item => {
        totalPrice += item.unitPrice
    })

    let averagePrice = totalPrice / products.length

    return (<>
        <ProductsHeader totalPrice={totalPrice} averagePrice={averagePrice} productsLength={products.length} />

        <table className='w3-table w3-striped'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Unit Price</th>
                    <th>Units In Stock</th>
                    <th>Delete</th>
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
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>)
}

export default ProductsPage