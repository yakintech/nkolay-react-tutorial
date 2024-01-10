import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function OrderDetail() {

    const { id } = useParams()

    const [detail, setdetail] = useState({})


    useEffect(() => {
        fetch(`https://northwind.vercel.app/api/orders/${id}`)
            .then(res => res.json())
            .then(data => setdetail(data))
    
    })

    return (<>
    <h1>{id}</h1>
    <h1>Order Date: {detail.orderDate}</h1>
    <h1>Required Date: {detail.requiredDate}</h1>
    <h1>Shipped Date: {detail.shippedDate}</h1>
    <h1>Customer Id: {detail.customerId}</h1>
    <h1>Employee Id: {detail.employeeId}</h1>

    </>
    )
}

export default OrderDetail