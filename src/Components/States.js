import React from 'react'

const States = ({states}) => {
  return (


    <div>

    

    {states.map((state)=>(
      <div  className='bg-warning'>
      <h1>     
      {state.name}
      </h1> 
      <h4>{state.language}</h4>
      <h4>{state.population}</h4>
      </div>
    )

    )}

</div>
  );
};

export default States 