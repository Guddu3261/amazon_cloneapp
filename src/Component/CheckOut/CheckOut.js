import { CardCvcElement } from '@stripe/react-stripe-js';
import React from 'react';
import CheckOutProduct from '../CheckOutProduct/CheckOutProduct';
import { useStateValue } from '../StateProvider/StateProvider';
import SubTotal from '../SubTotal/SubTotal';
import './CheckOut.css';

const CheckOut = () => {
  const[{basket,user},dispatch]=useStateValue();
  return (
    <div className='checkout' >
      <div className='checkout_left'>
        <img 
          className='checkout_ad' 
          alt="" 
           src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          />
          <div >
          <h3>Hello,{user?.email} </h3>
          

            <h2 className="checkout_title" >Your Shopping Basket</h2>
                {/* Checkout Product */}
                  {
                    basket.map((item)=>{
                      return(
                        <CheckOutProduct
                      id={item.id}
                       title={item.title}
                       image={item.image}
                       price={item.price}
                       rating={item.rating}
                      />
                      )
                    })
                  }
                {/* Basket Item */}
                {/* Basket Item */}
                {/* Basket Item */}
          </div>
      </div>

      <div className='checkout_right'>
          <SubTotal/>
         
      </div>
      
    </div>
  )
}

export default CheckOut
