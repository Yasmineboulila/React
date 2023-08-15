import React from 'react'
import Component2 from './CardProduct'
import Component3 from './Navbar'
import Component4 from './AddProduct'
import { useState } from 'react';
export default function Component1({data,search}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
   
  }
  return (
    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
    {data.filter((product)=>product.Product_material.includes(search.toUpperCase())).map((el)=><Component2 key={el.id} product={el} />)}
    <button style={{backgroundColor:"orange"}} onClick={handleShow} >Add Product</button>
    <Component4 show={show}  handleClose={()=>handleClose()} />

    </div>
  )
}
