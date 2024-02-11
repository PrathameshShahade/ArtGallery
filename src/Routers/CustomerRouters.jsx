import { Navigation } from '@mui/icons-material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../customer/components/Cart/Cart'

const CustomerRouters = () => {
  return (
    <div>
        <div>
           {/*<Navigation/>*/} 
        </div>

        <Routes>
          {/*<Route path="/" element={<HomePage/>}></Route>*/}  
            <Route path="/cart" element={<Cart/>}></Route>

            {/*<ProductDetails/>*/}
  {/*<Cart/>*/}
  {/*<Checkout/>*/}
    {/*<Order/>*/}
    {/*<OrderDetails/>*/}
        </Routes>
        <div>
           {/*<Footer/>*/} 
        </div>
    </div>
  )
}

export default CustomerRouters