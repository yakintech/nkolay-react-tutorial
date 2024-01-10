import React, { useEffect, useState } from 'react'

function EffectSample() {

    const [categories, setcategories] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        fetch('https://northwind.vercel.app/api/categories')
            .then(response => response.json())
            .then(json => {
                setcategories(json)
                 setloading(false)
            })
    }, [])

    return (<>
{
    loading ? <h1>Loading...</h1> :
    <ul>
        {categories.map(category => <li key={category.id}>{category.name}</li>)}
    </ul>
}
    </>
    )
}
export default EffectSample