import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Navbay from './Navbar.module.css'

const clickHandle=()=>{
    console.log("hello guys");
}


const dbclickHandle=(name)=>{
    alert("hello guys you double clicked me "+ name);
}



const Navbar = () => {

 
  const [name, setName] = useState("Green");
  const [count, setqunty] = useState(0);

   const ChangeColour=()=>{
    setName("Red")
   }
   const ChangeQuantity=()=>{
    setqunty(count+1)
   }
   const decrement=()=>{
    setqunty(count-1)
   }

  return (
    <div>
        <h1 className='bg-success text-white'>
            Component One Two
        </h1>
        <Button variant="primary" onClick={clickHandle}>Click Me</Button>{' '} 
        <h1 className={Navbay.helo} onDoubleClick={()=>dbclickHandle('vishnu')}>Double click me</h1>

        <Button onClick={ChangeColour}> 
          This is {name}
        </Button>

        <h1>count is {count}</h1>
        <Button className='m-2 bg-success' onClick={ChangeQuantity}>+</Button>
        <Button className='m-2 bg-danger' onClick={decrement} >-</Button>
   
    </div>
  )
}

export default Navbar