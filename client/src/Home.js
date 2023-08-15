// import React ,{useState,useEffect}  from 'react'
import Typical from 'react-typical'
import axios from 'axios'
// import axios from 'axios'
// import Button from 'react-bootstrap/Button';

// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
export default function Home() {
  


//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     axios.get(`https://www.harmonystore01.com/api/get_All_product`)
//     .then((res) =>  setPosts(res.data))
//  }, []);


//   const[Product_material,setProductmaterial]=useState("")
//   const[category,setCategory]=useState("")
//   const[description,setDescription]=useState()
//   const[image_url,setImage]=useState("")
//   const[price,setPrice]=useState(0)
//   const[price_promo,setPricepromo]=useState(0)
//   const[product_name,setProductname]=useState("")
//   const[quantity_in_stock,setQuantity]=useState(0)

//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
// const createpost=()=>{
//   axios.post(`https://www.harmonystore01.com/api/Create_product`,{
//     Product_material:Product_material,
//     category:category,
//     description:description,
//     image_url:image_url,
//     price:price,
//     price_promo:price_promo,
//     product_name:product_name,
//     quantity_in_stock:quantity_in_stock
//   }).then((res)=>console.log(res))



  return (
    // <>
    <div>
      <Typical 
      steps ={['Bienvenue',1000,'Bienvenue à tous',1000]}
      loop={Infinity}
      wrapper="p"/>

    </div>
  )
}
    /* <button onClick={handleShow}>open</button>
    <Modal show={show} onHide={handleClose}>
           <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
           <Modal.Body>
           <Form>
           <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product_material</Form.Label>
             <Form.Control type="text" placeholder="Enter product_material" onChange={(e)=>setProductmaterial(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Category</Form.Label>
             <Form.Control type="text" placeholder="Enter category" onChange={(e)=>setCategory(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Description</Form.Label>
             <Form.Control type="text" placeholder="Enter description" onChange={(e)=>setDescription(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Image</Form.Label>
            <Form.Control type="text" placeholder="Enter image" onChange={(e)=>setImage(e.target.value)}/>
          </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Price</Form.Label>
             <Form.Control type="number" placeholder="Enter price" onChange={(e)=>setPrice(e.target.value)}/>
           </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Price promo</Form.Label>
             <Form.Control type="number" placeholder="Enter price promo" onChange={(e)=>setPricepromo(e.target.value)}/>
           </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Product name</Form.Label>
             <Form.Control type="text" placeholder="Enter product name" onChange={(e)=>setProductname(e.target.value)}/>
           </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Quantity in stock</Form.Label>
             <Form.Control type="number" placeholder="Enter quantity in stock" onChange={(e)=>setQuantity(e.target.value)}/>
           </Form.Group>
           
        </Form>
            </Modal.Body>
            <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
         </Button>
         <Button variant="primary" onClick={createpost}>
           Save Changes
         </Button>
       </Modal.Footer>
          </Modal> */
  // </>
        
  
  
