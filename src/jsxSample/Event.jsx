import React from 'react'

function Event() {

    const hello = () => {
        alert('Hello World')
    }

    const calcKDV = (price) => {
        let kdv = price * 0.18
        alert(kdv)
    }

  return (<>
    <button onClick={hello} >Hello</button>
    <button onClick={() => hello()} >Hello</button>
    <button onClick={() => calcKDV(100)} >Calc KDV</button>

  </>
  )
}

export default Event