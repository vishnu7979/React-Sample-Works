import React, { useState } from 'react'
import {phonesData} from "./Productdata"
import { Card,Button } from 'react-bootstrap'
const Products = () => {
    const [items,setItems]=useState(phonesData)

    const decQty=(id)=>{
        const newItem=items.map((item)=>
        item.id===id && item.qty>1 ?{...item,qty:item.qty-1}:item
        )
        setItems(newItem) 
    }
    const incQty=(id)=>{
        const newItem=items.map((item)=>
        item.id===id?{...item,qty:item.qty+1}:item
        )
        setItems(newItem) 
    }

  return (
    <div>
        <h1 className='bg-info text-white'>
            Products
        </h1>
        {items.map((item)=>(
            <div className='d-inline-flex' key={item.id}> 
            <Card className='shadow p-3 m-2 bg-body-tertiary rounded' style={{ width: '13rem' }}>
            <Card.Img style={{ height: '15rem' }} className='p-2' variant="top" src={require(`./assets/${item.image}.jpeg`)} />
            <Card.Body>
              <Card.Title className='text-primary'>{item.model}</Card.Title>
              <Card.Text>
                {item.desc}
              </Card.Text>
              <h5>Price: ₹ {item.price}</h5>
              <div>
                  <p>Qty:
                  <Button
                  onClick={()=>decQty(item.id)}
                  className='m-1'>-</Button >
                  {item.qty}
                  <Button
                  onClick={()=>incQty(item.id)}
                  className='m-1'>+</Button>
                  </p>    
                  
              </div>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card> 
          </div>
        ))}
        
    </div>
  )
}

export default Products