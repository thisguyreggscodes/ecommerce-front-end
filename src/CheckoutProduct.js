import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';




function CheckoutProduct({id,info, image,title,price }) 
{

  
  const [{basket},dispatch] = useStateValue();

  const removeFromBasket = () => {
// removes the item from the basket
    dispatch ({
        type: 'REMOVE_FROM_BASKET',
        id: id,
        
    })

  }

 return (
    <div className="checkoutProduct">
    <img className="checkoutProduct_image" alt="" src={image}/>

    <div>
        <p className='checkoutProduct_title'>{title}</p>
        <p className="checkoutProduct_info">{info}</p>
        <p className="checkoutProduct_price">
            <small>Php</small>
            <strong>{price}</strong>
        </p>


        </div>
        <button className="removeProduct" onClick={removeFromBasket}>Remove from Basket</button>
        
 

        
        
    </div>
  )
}

export default CheckoutProduct