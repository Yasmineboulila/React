import axios from "axios";
import { GET_PRODUCT } from "../actionType/actionType";
import Swal from 'sweetalert2';
export const get_product=()=>async(dispatch)=>{
    try {
        const res=await axios.get(`https://www.harmonystore01.com/api/get_All_product`)
        console.log(res)
        dispatch({type:GET_PRODUCT,payload:res.data})
    } catch (error) {
        
    }
}
export const AddProduct=(data)=>async(dispatch)=>{
    
    try {
        const res=await axios.post(`https://www.harmonystore01.com/api/Create_product`,data)
        if (res.data==="poste done"){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })
          } 
         
    }
          catch (error) {
        
    }

}
// Product_material:Product_material,
// product_name:product_name,
// price:price,
// image_url:image_url,
// price_promo:price_promo,
// quantity_in_stock:quantity_in_stock,
// description:description,
// category:category
