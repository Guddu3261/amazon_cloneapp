import React from 'react'
import "./CheckOutProduct.css";
import { useStateValue } from '../StateProvider/StateProvider';

const CheckOutProduct = ( {id,image,title,price,rating} ) => {
  const[{basket},dispatch]=useStateValue();
  const removeFromBasket=()=>{
    debugger;
    // remove the item from basket
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id,
    })
  }
  return (
    <div className="checkoutProduct" >
        <img className='checkoutProduct_image'
        src={image}
        alt=""
         />
         <div className='checkoutProduct_info'>
            <p className='checkoutProduct_title' >{title} </p>
            <p className="checkoutProduct_price"> 
                 <small>$</small>
                 <strong>{price} </strong>
            </p>
            <div className='checkoutProduct_rating'>
                {Array(rating).fill().map((_,i)=>(
                    <p>🌟</p>
                ))}
            </div>
            <button onClick={removeFromBasket} >Remove from Basket</button>
         </div>
    </div>
  )
}

export default CheckOutProduct
