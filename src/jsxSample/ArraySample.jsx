import React from 'react'

function ArraySample() {

    let countries = ['Japan', 'USA', 'China', 'Korea', 'UK']

  return (<>
        <ul>
            {
                countries.map((item) => <li>{item}</li>)
            }
        </ul>

  </>
  )
}

export default ArraySample