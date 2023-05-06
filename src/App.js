import React,{useEffect} from 'react'
import Header from './Component/Header/Header'
import Home from './Component/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CheckOut from './Component/CheckOut/CheckOut';
import Login from './Component/Login/Login';
import { auth } from './firebase';
import { useStateValue } from './Component/StateProvider/StateProvider';
import Payment from './Component/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Component/Orders/Orders';
  
// const promise=loadStripe(`pk_test_51Mp8RMSFkUAAXGDBSeDvIOBICFcQ2QZ2eNVBCbsPb7DvHwC161xde5bV2hrjpde9n9QYltHNyeFJavKHePLmxc4X00Tt6v6bRx`);

const promise=loadStripe("pk_test_51MolalSIZsCzZOlJudIVYYN2rlgRzkB3TAQtjjwa0yn6rAoVUg58hs3ZO8sYrMMsDzLsGklTMxGMNFI63US9jN3X004gESteTb");
// console.log(promise);
const App = () => {
  const [{}, dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
     console.log('the user is >>>>', authUser);
     if(authUser){
       // the user logged in/the user was loggedi.
       dispatch({
        type:"SET_USER",
        user:authUser
       })
     }else{
       // the user is logged off.
       dispatch({
        type:"SET_USER",
        user:null
       })

     }
    })
 },[])

  return (
   <Router>
   <div className='app'>
   
    <Routes>
      <Route
        exact path="/orders" 
        element={
          <>
          <Header/>
            <Orders/>
          </>
        }
         />
    <Route exact path="/login_page" element={<Login/>} />
      <Route exact path="/" element={
      <>
      <Header />
        <Home />
      </>
    } />
      <Route exact path="/checkout" element={
      <>
         <Header />
         <CheckOut />
      </>
    } />
      
      {/* for payment page routing */}
      <Route exact path="/payment" element={
      <>
         <Header/>
        <Elements  stripe={promise} >
        <Payment/>
        </Elements>
         
        
      </>
    } />
    </Routes>
    </div>
   </Router>

  )
}

export default App