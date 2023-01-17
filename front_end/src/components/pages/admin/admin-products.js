
import ProductComponent from "./admin-components/product-components";

import axios from "axios";

const fetchProducts = async (abctrl) => {
    const { data } = await axios.get("/api/products/admin", {
        signal: abctrl.signal,
    })
    return data;
}

const deleteProduct=async(productId)=>{

    const {data}=await axios.delete(`/api/products/admin/${productId}`)
    return data
}


const AdminProducts=()=>{
    
   return <ProductComponent deleteProduct={deleteProduct} fetchProducts={fetchProducts}/>
}
      
export default  AdminProducts;