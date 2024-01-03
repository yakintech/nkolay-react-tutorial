import React from 'react'

function Intro() {

    let name = "John"
    let age = 30

    let product = {
        name: "Apple",
        price: 10
    }
    let onlineStatus = true
  return <>
        <h1>Name: {name}</h1>
        <h2>Age: {age}</h2>
        <h2>{product.name}</h2>
        <h2>{product.price.toFixed(2)}</h2>
        {
            onlineStatus ? <h2>Online</h2> : <h2>Offline</h2>
        }
        <h2>{onlineStatus ? "Online" : "Offline"}</h2>
  </>
}

export default Intro