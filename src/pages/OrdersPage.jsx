import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function OrdersPage() {

    const [orders, setorders] = useState([])

    useEffect(() => {
        fetch('https://northwind.vercel.app/api/orders')
        .then(res => res.json())
        .then(data => setorders(data))
    
    })

    const navigate = useNavigate();

  return (<>
  <table>
    <thead>
        <tr>
            <th>Id</th>
            <th>Customer Id</th>
            <th>Employee Id</th>
            <th>Order Date</th>
            <th>Go to detail</th>
        </tr>
    </thead>
    <tbody>
        {
            orders.map(order => {
                return (
                    <tr>
                        <td>
                            <Link to={`/orders/${order.id}`}>
                            {order.id}
                            </Link>

                        </td>
                        <td>{order.customerId}</td>
                        <td>{order.employeeId}</td>
                        <td>{order.orderDate}</td>
                        <td><button onClick={() => navigate(`/orders/${order.id}`)}>Detail</button></td>
                    </tr>
                )
            })
        }
    </tbody>
  </table>
  </>
  )
}

export default OrdersPage