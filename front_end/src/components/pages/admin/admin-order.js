import OrderComponents from "./admin-components/order-components";


import axios from 'axios'


const getOrders=async()=>{
  const {data}=axios.get('/api/orders/admin')
  return data
}
const AdminOrder=()=>{
  


    


    return(
      <OrderComponents getOrders={getOrders}/>
    );
}
   
export default  AdminOrder;