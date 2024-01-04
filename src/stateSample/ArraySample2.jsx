import React, { useState } from 'react'

function ArraySample2() {

    const [randomNumbers, setrandomNumbers] = useState([3, 7, 11])

    const addRandom = () => {
        const random = Math.floor(Math.random() * 100)
        setrandomNumbers([...randomNumbers, random])

    }

    return (<>
        <button onClick={addRandom}>Add Random Number</button>
        <h1>Length: {randomNumbers.length}</h1>
        <ul>
            {
                randomNumbers.map((number) => <li>{number}</li>)
            }
        </ul>

    </>
    )
}

export default ArraySample2