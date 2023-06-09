import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';

import { useStateValue } from '../StateProvider/StateProvider';
const Header = () => {
  const[{basket,user},dispatch]=useStateValue()
  const handleAuthentication=()=>{
    if(user){
      auth.signOut();
    }
  }

 
  return (
    <div className="header" >
    <Link to="/" >
        <img className='header_logo'
              alt="#" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              />
    </Link>
     

      <div className="header_search">
        <input
            className="header_searchInput"
             type="text"
        />
         <SearchIcon className="header_searchIcon" />
      </div>
        <div className='header_nav'>
            <Link 
              to={!user && '/login_page'}
              // to="/login_page"
              >
             <div  onClick={handleAuthentication}  className='header_option' >
             {/* user?.email || */}
                <span className="header_optionLineOne">Hello
                {!user ? 'Guest' : user.email}
               </span>
               <span className="header_optionLineTwo">
                {user ? "sign Out" : "sign In" }
                
               </span>
             </div>
            </Link>

                 <div className='header_option' >
                 <span className="header_optionLineOne">
                    Returns
               </span>
               <span className="header_optionLineTwo">
                  & Orders
               </span>
                </div>
                <div className='header_option' >
                <span className="header_optionLineOne">
                Your
               </span>
               <span className="header_optionLineTwo">
                 Prime
               </span>
                 </div>

                <Link to="/checkout">
                <div className='header_optionBasket'>
                    <ShoppingBasketIcon/>
                    <span className="header_optionLineTwo header_basketCount"> {basket?.length} </span>
                 </div>
                </Link>
        </div>
    </div>
   
  )
}

export default Header