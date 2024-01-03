import React from 'react'

function UserDetail(props) {

    let {name, surname, age, points} = props

  return (<>
    <h1>Name: {name}</h1>
    <h1>Surname: {surname}</h1>
    <p>Age: {age}</p>

    <ul>
        {
            points.map((item) => <li>{item}</li>)
        }
    </ul>

    
  </>
  )
}

export default UserDetail