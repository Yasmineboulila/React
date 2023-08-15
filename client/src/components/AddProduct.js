import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AddProduct } from '../redux/actionProduct/actionProduct';
import { useDispatch } from 'react-redux';

function Component4({ show, handleClose, productUpdate }) {
  const dispatch=useDispatch()
  const [state, setState] = useState({
    Product_material: '',
    product_name: '',
    quantity_in_stock: 1,
    category: '',
    price: 0,
    price_promo: 0,
    description: '',
    image_url: '',
  });

  useEffect(() => {
    if (productUpdate) {
      setState((prevState) => ({
        ...prevState,
        ...productUpdate,
      }));
    }
  }, [productUpdate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const {
      Product_material,
      product_name,
      quantity_in_stock,
      category,
      price,
      price_promo,
      description,
      image_url,
    } = state;
    dispatch(AddProduct(),handleClose())
  };

  const handleEdit = () => {
    const { id } = productUpdate || {};
    const {
      Product_material,
      product_name,
      quantity_in_stock,
      category,
      price,
      price_promo,
      description,
      image_url,
    } = state;

    axios
      .put(`https://www.harmonystore01.com/api/update/product/${id}`, {
        Product_material,
        category,
        description,
        image_url,
        price,
        price_promo,
        product_name,
        quantity_in_stock,
      })
      .then((res) => {
        if (res.data === 'Product updated') {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Product updated',
            showConfirmButton: false,
            timer: 1500,
          });
          handleClose();
        }
      });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product_material</Form.Label>
            <Form.Control
              value={state.Product_material}
              name="Product_material"
              type="text"
              placeholder="Enter Product_material"
              onChange={handleChange}
             
            />
          </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product name</Form.Label>
        <Form.Control name="product_name" type="text" placeholder="Enter product_name" onChange={handleChange}  value={state.product_name}/>
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control value={state.price} name="price" type="number" placeholder="Enter price" onChange={handleChange}/>
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Image</Form.Label>
         <Form.Control value={state.image_url} name="image_url" type="text" placeholder="Enter image_url" onChange={handleChange}/>
      </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Price promo</Form.Label>
         <Form.Control value={state.price_promo} name="price_promo" type="number" placeholder="Enter price_promo" onChange={handleChange}/>
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Quantity in stock</Form.Label>
         <Form.Control value={state.quantity_in_stock} name="quantity_in_stock" type="number" placeholder="Enter quantity_in_stock" onChange={handleChange}/>
       </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category</Form.Label>
         <Form.Control value={state.category} name="category" type="text" placeholder="Enter category" onChange={handleChange}/>
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Description</Form.Label>
        <Form.Control value={state.description} name="description" type="text" placeholder="Enter description" onChange={handleChange}/>
      </Form.Group>
          {/* Other Form Groups */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={productUpdate ? handleEdit : handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Component4;






// import React, { Component } from 'react'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
// import axios from "axios";
// import Swal from 'sweetalert2'
// export default class Component4 extends Component {
//   constructor(props){
//   super(props)
//   this.state={
//     Product_material:"",
//     product_name:"",
//     price:0,
//     image_url:"",
//     price_promo:0,
//     quantity_in_stock:1,
//     description:"",
//     category:""
//   }
// }
// handleChange(e){
//   this.setState({[e.target.name]:e.target.value})
// }

// componentDidUpdate(perventprop){
//   const productkeys=[
//     "Product_material",
//     "product_name",
//     "price",
//     "image_url",
//     "price_promo",
//     "quantity_in_stock",
//     "description",
//    " category"
//   ]
//   productkeys.forEach((key)=>{ if (perventprop.productupdate?.[key]!==this.props.productupdate?.[key]) {
//     this.setState({[key]:this.props.productupdate?.[key]})
    
//   }
// })}

 


//   handleSubmit(){
//     const {handleClose}=this.props
// const {Product_material,product_name,price,image_url,price_promo,quantity_in_stock,description,category}=this.state
// axios.post(`https://www.harmonystore01.com/api/Create_product`,{
//     Product_material:Product_material,
//     product_name:product_name,
//     price:price,
//     image_url:image_url,
//     price_promo:price_promo,
//     quantity_in_stock:quantity_in_stock,
//     description:description,
//     category:category
//   }).then((res)=>{
//     if (res.data==="poste done"){
//       Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: 'Your work has been saved',
//         showConfirmButton: false,
//         timer: 1500
//       })
//       handleClose()
//     }
//   })
 
// }
// handleEdit(){
//   const {handleClose}=this.props

//   const id=this.props.productupdate.id
//   const {Product_material,product_name,price,image_url,price_promo,quantity_in_stock,description,category}=this.state
//   axios.put(`https://www.harmonystore01.com/api/update/product/${id}`,{
//     Product_material:Product_material,
//     product_name:product_name,
//     price:price,
//     image_url:image_url,
//     price_promo:price_promo,
//     quantity_in_stock:quantity_in_stock,
//     description:description,
//     category:category
//   }).then((res)=>{
//     if(res.data==="Product updated"){
//       Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: 'Product updated',
//         showConfirmButton: false,
//         timer: 1500
//       })
//     }
//   })
//   handleClose()
// }

//   render() {
//     const {handleClose,show,productupdate}=this.props
//     const [Product_material,price,price_promo,quantity_in_stock,description,category,product_name,image_url]=this.state
//     return (
//       <>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Product material</Form.Label>
//         <Form.Control name="Product_material" type="text" placeholder="Enter Product_material"  onChange={(e)=>this.handleChange(e)}/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Product name</Form.Label>
//         <Form.Control value={Product_material} name="product_name" type="text" placeholder="Enter product_name" onChange={(e)=>this.handleChange(e)}/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Price</Form.Label>
//         <Form.Control value={product_name} name="price" type="number" placeholder="Enter price" onChange={(e)=>this.handleChange(e)}/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Image</Form.Label>
//         <Form.Control value={image_url} name="image_url" type="text" placeholder="Enter image_url" onChange={(e)=>this.handleChange(e)}/>
//       </Form.Group>
//  <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Price promo</Form.Label>
//         <Form.Control value={price_promo} name="price_promo" type="number" placeholder="Enter price_promo" onChange={(e)=>this.handleChange(e)}/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Quantity in stock</Form.Label>
//         <Form.Control value={quantity_in_stock} name="quantity_in_stock" type="number" placeholder="Enter quantity_in_stock" onChange={(e)=>this.handleChange(e)}/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Category</Form.Label>
//         <Form.Control value={category} name="category" type="text" placeholder="Enter category" onChange={(e)=>this.handleChange(e)}/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//       <Form.Label>Description</Form.Label>
//         <Form.Control value={description} name="description" type="text" placeholder="Enter description" onChange={(e)=>this.handleChange(e)}/>
//       </Form.Group>
     
//     </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//           Close
//           </Button>
//           <Button variant="primary" onClick={productupdate? ()=>this.handleEdit:()=>this.handleSubmit()}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//     )
//   }
// }




// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';

// function Example({show,handleClose}) {
//   const[ID,setID]=useState()
//   const[Title,setTitle]=useState("")
//   const[Rating,setRating]=useState()
//   const[Image,setImage]=useState("")
//   const[Date,setDate]=useState("")
  
//  const handleSubmit=()=>{
//   var data={}
//   data={
//     id:ID,
//     title:Title,
//     rating:Rating,
//     image:Image,
//     date:Date

//   }
//   localStorage.setItem("data",JSON.stringify(data))
//   handleClose()
//  }
//   return (
//     <>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>ID</Form.Label>
//         <Form.Control type="number" placeholder="Enter ID"  onChange={(e)=>setID(e.target.value)}/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Title</Form.Label>
//         <Form.Control type="text" placeholder="Enter Title" onChange={(e)=>setTitle(e.target.value)}/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Rating</Form.Label>
//         <Form.Control type="number" placeholder="Enter Rating" onChange={(e)=>setRating(e.target.value)}/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Image</Form.Label>
//         <Form.Control type="text" placeholder="Enter Image" onChange={(e)=>setImage(e.target.value)}/>
//       </Form.Group>
//  <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Date</Form.Label>
//         <Form.Control type="date" placeholder="Enter Date" onChange={(e)=>setDate(e.target.value)}/>
//       </Form.Group>
     
//     </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSubmit}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Example;