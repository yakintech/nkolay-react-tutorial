import React, { useState } from 'react'

function ArraySample() {

    const [countries, setCountries] = useState(["Turkey", "Germany", "France", "England"])

    return (<>
        <button onClick={() => setCountries([])}>Empty</button>
        <h1>Length: {countries.length}</h1>
        <ul>
            {
                countries.map((country, index) => {
                    return <li key={index}>{country}</li>
                })
            }
        </ul>
    </>
    )
}

export default ArraySample