import {BrowserRouter,Routes,Route} from 'react-router-dom'

import './App.css';
import ScrollTottop from './components/pages/utilities/scrolltotop';
import AdminAnalytics from './components/pages/admin/admin-analytics';
import AdminChat from './components/pages/admin/admin-chat';
import AdminCreateProduct from './components/pages/admin/admin-create-product';
import AdminEditProduct from './components/pages/admin/admin-edit-products';
import AdminEditUser from './components/pages/admin/admin-edit-user';
import AdminOrder from './components/pages/admin/admin-order';
import AdminOrderDetails from './components/pages/admin/admin-order-details';
import AdminProducts from './components/pages/admin/admin-products';
import AdminUser from './components/pages/admin/admin-user';
import ProtectedComponents from './components/pages/authenticated/protectedComponents';
import CartPage from './components/pages/cart/cart';
import PageFooter from './components/pages/beautifyers/footer';
import PageHeader from './components/pages/beautifyers/header';
import RoutesForUserChatComponent from './components/pages/beautifyers/routes-for-user-chat-component';
import HomePage from './components/pages/home/homepage';
import LoginPage from './components/pages/login/login';
import RegisterPage from './components/pages/login/register';
import ProductDetailsPage from './components/pages/products/product-details';
import ProductsListPage from './components/pages/products/product-list';
import UserCart from './components/pages/user/user-cart';
import UserOrder from './components/pages/user/user-order';
import UserOrderDetails from './components/pages/user/user-order-details';
import UserProfile from './components/pages/user/user-profile';

function App() {
  return (
      <BrowserRouter>
     <ScrollTottop/>

      {/* header */}
      <PageHeader/>
    
        <Routes>
          {/* a seperate route for user chat function to be there in all except admin */}
          <Route
            element={<RoutesForUserChatComponent/>}>

            {/* home page */}
            <Route 
              path="/" 
              element={<HomePage/>}>
            </Route>




            {/* cart page */}
            <Route 
              path='/cart'
              element={<CartPage/>}>
            </Route>




          {/* login page */}
            <Route
              path='/login'
              element={<LoginPage/>}>
            </Route>




            {/* products list page */}
            <Route
              path='/productlist'
              element={<ProductsListPage/>}>
            </Route>



            {/* register page */}
            <Route
              path='/register'
              element={<RegisterPage/>}>
            </Route>




            {/* Proudct details page */}
            <Route
              path='/productdetails'
              element={<ProductDetailsPage/>}>
            </Route>




            {/* error page */}
            <Route
              path='*'
              element="Page doesn't exist" >
            </Route>


            

            {/* user login/auth */}
            <Route 
              path='/'
              element={<ProtectedComponents/> } admin={false}>

                <Route
                  path='/user/user-order-details'
                  element={<UserOrderDetails/>}>
                </Route>

                <Route
                  path='/user/user-order'
                  element={<UserOrder/>}>
                </Route>

                <Route
                  path='/user/user-profile'
                  element={<UserProfile/>}>
                </Route>

                <Route
                  path='/user/user-cart'
                  element={<UserCart/>}>
                </Route>

            </Route>
            

           </Route>

          
        {/* admin management */}
          <Route 
            path='/'
            element={<ProtectedComponents/> } admin={true}>

              <Route
                path='/admin/admin-analytics'
                element={<AdminAnalytics/>}>
              </Route>

              <Route
                path='/admin/admin-chat'
                element={<AdminChat/>}>
              </Route>

              <Route
                path='/admin/admin-create-products'
                element={<AdminCreateProduct/>}>
              </Route>

              <Route
                path='/admin/admin-edit-products'
                element={<AdminEditProduct/>}>
              </Route>

              <Route
                path='/admin/admin-edit-user'
                element={<AdminEditUser/>}>
              </Route>

              <Route
                path='/admin/admin-order-details/'
                element={<AdminOrderDetails/>}>
              </Route>

              <Route
                path='/admin/admin-order'
                element={<AdminOrder/>}>
              </Route>

              <Route
                path='/admin/admin-products'
                element={<AdminProducts/>}>
              </Route>

              <Route
                path='/admin/admin-user'
                element={<AdminUser/>}>
              </Route>
          </Route>



        </Routes>
        {/* footer */}
        <PageFooter/>

      </BrowserRouter>
    
  );
}

export default App;
