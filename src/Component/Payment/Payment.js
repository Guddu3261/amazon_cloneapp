import React,{useState,useEffect} from 'react';
import "./Payment.css";
import { useStateValue } from '../StateProvider/StateProvider';
import CheckOutProduct from '../CheckOutProduct/CheckOutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements,PaymentElement} from "@stripe/react-stripe-js";
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';
import axios from 'axios';

const Payment = ({id,title,image,price,rating} ) => {
    const[{basket,user},dispatch]=useStateValue();
    const stripe=useStripe();
    const elements=useElements();
    const[error,setError]=useState(null);
    const[disabled,setDisabled]=useState(true);
    const[succeedded,setSucceedded]=useState(false);
    const[processing,setProcessing]=useState("");
    const[clientSecret,setClientSecret]=useState(true);
    const navigate=useNavigate();
    useEffect(()=>{
    //    generate the special stripe which allow us to charge a customer 
     const getClientSecret=async()=>{
      debugger;
        const response=await axios({
            method:'post',
            // Stripe expects the total in aCurrencies submits.
            url:`/payments/create?total=${getBasketTotal(basket)*100 }`
        })
        setClientSecret(response.data.clientSecret)
     }
     getClientSecret();
    },[basket])
    console.log("The secret id --->",clientSecret)

    const handleSubmit=async(event)=>{
       event.preventDefault();
       setProcessing(true);
       const payload=await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
       }).then(({paymentIntent} )=>{
        // paymentIntent=payment confirmation
        setSucceedded(true);
        setError(null);
        setProcessing(false);

         dispatch({
          type:'EMPTY_BASKET'
         })

        navigate("/orders") 
        // history.replace  method used
       })
    }
    const handleChange=(event)=>{
      setDisabled(event.empty);
      setError(event.error ? event.error.message:"");
    }
  return (
    <div className='payment' >
      <div className="payment_container">
       <h1>
       CheckOut(
        <Link to="/checkout">{basket.length} </Link>
       )
       </h1>
        {/* payment section example delivery address */}
        <div className="payment_section" >
           <div className="payment_title" >
              <h3>Delivery Address</h3>
           </div>
           <div className="payment_address">
             <p>{user?.email} </p>
             <p>mahalakshmi Layot</p>
             <p>Bengalore 560086 </p>
           </div>
        </div>

         {/* payment section example Review items */}
           <div className="payment_section" >
              <div className='payment_title'>
                <h3>Review items and delivery</h3>
              </div>
              <div className='payment_items'>
               {
                basket.map((item,index)=>{
                    return(
                        <CheckOutProduct
                        key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image} 
                            price={item.price}
                            rating={item.rating}
                        />
                    )
                })
               }
              </div>
           </div>
         {/* payment section example Payment method */}
           <div className="payment_section" >
              <div className="payment_title">
                <h3>payment method</h3>
              </div>
              <div className='payment_details'>
                {/* stripe method  write here*/}
                 <form  
                    onSubmit={handleSubmit} 
                    >    
                    <CardElement onChange={handleChange}/>
                    
                    <div className="payment_priceContainer">
                        <CurrencyFormat
                            renderText={(value)=>
                            (
                                <>
                                    <h3>order Total: {value} </h3>
                                </>
                            ) }
                            decimalScale={2}
                            value={getBasketTotal(basket) }
                            displayType="text"
                            thousandSeparator={true}
                            prefix={"$"}
                        />
                    </div>
                    <button disabled={processing ||disabled || succeedded } >
                    <span>{processing ? <p>processing</p>:"Buy Now" } </span>
                    </button>

                </form>
                
              </div>
          </div>
      </div>
    </div>
  )
}

export default Payment;
