import React, { useState } from 'react'

//react hooks
function StateIntro() {

    const [counter, setCounter] = useState(0)
    //counter değişkenin kendisi
    //setCounter ise counter değişkenini değiştirmek için kullanılır
    // 0 ise counter değişkeninin başlangıç değeri

    const increase = () => {
        setCounter(20)
    }
    return (<>
        <h1>Counter: {counter}</h1>
        {/* <button onClick={increase}>Increase</button> */}
        <button onClick={() => increase()}>Increase</button>
    </>
    )
}
export default StateIntro

