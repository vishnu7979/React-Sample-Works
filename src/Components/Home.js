import React from 'react'
import Child from './Child'


const colourblue={color:'blue'}
const Home = () => {
  return (
    <div> 
        <h1 style={colourblue}>
            HOME
            <Child />
        </h1>
    </div>
  )
}

export default Home