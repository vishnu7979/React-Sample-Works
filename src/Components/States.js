import React from 'react'

const States = ({name,language}) => {
  return (
        <div  className='bg-warning'>
        <h1>     
        {name}
        </h1> 
        <h4>{language}</h4>
        </div>
  )
}

export default States 