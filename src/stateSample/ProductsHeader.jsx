import React from 'react'

function ProductsHeader({ totalPrice, averagePrice, productsLength }) {
  return (<>
    <div>
      <h1>Length: {productsLength}</h1>
      <h1>Total: {totalPrice.toFixed(2)}</h1>
      <h1>Average: {averagePrice.toFixed(2)}</h1>
    </div>
  </>
  )
}

export default ProductsHeader