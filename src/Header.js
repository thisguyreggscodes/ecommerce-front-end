import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";



function Header() {
    const [ { basket, user } ] =
    useStateValue();

    const handleAuthentication = () =>  {
        if (user) {
            auth.signOut();
        }
    }
  return (
    <div className='header'>
        <Link to="/">

    <img 
        
        className="header_logo" alt="" src={require('./velascocycles.png')}/>
    </Link>
    <div className="header_search"> 
    <input

        className="header_searchInput"
        type="text"/>
        <SearchIcon className='header_searchIcon'/>

    </div>

       { /*logo*/}
    <div className="header_nav">
        <Link to={!user && './login'}>
        <div onClick={handleAuthentication}
        className='header_option'>
            <span className='header_optionLineOne'>
                Hello,{user?.email}</span>
            <span className='header_optionLineTwo'>
                { user ? 'Sign Out': 'Sign In'}
            </span>
        </div>
        </Link>
    </div>

        <div className='header_option'>
        <span className='header_optionLineOne'>
               Admin</span>
               
            <span className='header_optionLineTwo'>
                Panel</span>
               
        </div>
    
        <div className='header_option'>
        <span className='header_optionLineOne'>
               Your</span>
            <span className='header_optionLineTwo'>
                Basket</span>  
        </div>
        <Link to= "/checkout">
        <div className="header_optionBasket">
        <ShoppingBasketIcon/>
            <span className="header_optionLineTwo header_basketCount">
                {basket?.length}
            </span>

         </div>
        </Link>
        

        </div>
  );
}

export default Header