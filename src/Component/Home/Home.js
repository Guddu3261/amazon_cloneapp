import React from 'react';
import Product from '../Product/Product';
import './Home.css'; 

const Home = () => {
  return (
    <div className='home' >
        <div className='home_container'>
            <img 
            className='home_image'
            src="https://m.media-amazon.com/images/I/71SnvcmmGlL._SX3000_.jpg" alt=""
            />
            <div className="home_row">
                <Product  title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses [Paperback] Ries, Eric" 
                id="12321341"
                  price={29.99}
                  image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                  rating={5}
                 />
                <Product
                id="49538094"
                title="ASUS Vivobook 14, Intel Core i7-1165G7 11th Gen, 14
                     (35.56 cm) FHD, Thin and Laptop (16GB/512GB SSD/Intel 
                     Iris Xe Graphics/Windows 11/Office 2021/FP Sensor/Silver/1.55 kg),
                      X415EA-EK701WS"
                price={239.0}
                  rating={3}
                  image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41aTueuwrkL._SY300_SX300_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                  id="4903850"
                 title="Samsung LC49RG90SSUXEN 49' Curved
                        Led Gaming Monitor"
                  price={199.0}
                  rating={3}
                  image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                
                />
                <Product
                    id="23445930"
                    title="OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black)"
                    price={98.99}
                    rating={3}
                   image="https://m.media-amazon.com/images/I/71d5fMDvq9L._AC_UL480_QL65_.jpg"
                />
                <Product
                   id="23445930"
                   title="OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black)"
                  price={98.99}
                  rating={3}
                  image="https://m.media-amazon.com/images/I/71d5fMDvq9L._AC_UL480_QL65_.jpg"
                />
              </div>
              <div className="home_row">
              <Product
               id="90829332"
                title="Fire TV Stick 4K with Alexa Voice Remote | Stream in 4K resolution"
                price={44}
                rating={4}
                image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41McmELG2TL._AC_UL480_FMwebp_QL65_.jpg"
              />
              
              </div>
        </div>
    </div>
  )
}

export default Home