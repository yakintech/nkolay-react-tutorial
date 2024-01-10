import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ProductTable() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        loadData()


    }, [])

    const loadData = () => {
        axios.get('https://northwind.vercel.app/api/products')
            .then(response => {
                setProducts(response.data)
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                alert("System Error!")
            })
    }


    const deleteProduct = (id) => {

        const confirm = window.confirm('Are you sure?')

        if (confirm) {
            setLoading(true)
            axios.delete(`https://northwind.vercel.app/api/products/${id}`)
                .then(response => {
                    loadData()
                })
        }

    }

    return (<>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Product Name</th>
                    <th>Unit Price</th>
                    <th>Stock</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {loading ? <tr><td colSpan="5">Loading...</td></tr> :
                    products.map(product => <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.unitPrice}</td>
                        <td>{product.unitsInStock}</td>
                        <td><button onClick={() => deleteProduct(product.id)}>Delete</button></td>
                    </tr>)}
            </tbody>
        </table>
    </>)
}

export default ProductTable