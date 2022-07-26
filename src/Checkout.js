import React from 'react';
import './Checkout.css';
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from './Subtotal';


function Checkout() {

  const [{basket,user}] = useStateValue();

  return ( 
  <div classname="checkout">
    <div className="checkout_left">
      <img className='checkout_ad' src="https://d3vlhkqyz4y38a.cloudfront.net/blog/wp-content/uploads/2022/02/732x244.jpg"
      alt=""/>
            <div>
            <h3>Hello there, {user?.email}</h3>
            <h2 className="checkout_title">
            This is your Basket
            </h2>
            {basket.map (item =>
            <CheckoutProduct
            id={item.id}
            title={item.title}
            info={item.info}
            image={item.image}
            price={item.price}
            rating={item.rating}

            />
              )}   
            {/*Checkout Product*/}
            {/*Checkout Product*/}
            {/*Checkout Product*/}
            {/*Checkout Product*/}
            
            </div>
        </div>
       
        <div className="checkout_right">
            <h2>Your subtotal</h2>
          

         <Subtotal/>
        </div>
    </div>
  );
}

export default Checkout