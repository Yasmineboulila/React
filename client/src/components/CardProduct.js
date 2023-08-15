import React,{useState} from 'react'
import Component4 from "./AddProduct"
import Card from 'react-bootstrap/Card';
import axios from "axios";

export default function Component2({product}) {
  const [productupdate,setproductupdate]=useState()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setproductupdate(product)
    setShow(true)
   
  }
  const deleteproduct=(id)=>{
    axios.delete(`https://www.harmonystore01.com/api/delete/product/${id}`).then((res)=>{console.log(res)})
  }
  return (
    <>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.image_url} />
    <Card.Body>
      <Card.Title>{product.product_name}</Card.Title>
      <Card.Text>
      { product.price_promo>0 ? product.price_promo : product.price} {" "} TND
      </Card.Text>
     <button style={{backgroundColor:"yellow"}} onClick={()=>handleShow(product)}>Edit</button>
     <button style={{backgroundColor:"red"}} onClick={()=>deleteproduct(product.id)}>Delete</button>

    </Card.Body>
  </Card>

  </>
  )
}

