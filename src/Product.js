import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product (props) {

  const [{basket}, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        info: props.info,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    })
  }
  return (
    <div className="product">
        <div className="product_info">
          <p>
          <strong>{props.title}</strong>
          </p>
          <p>
          <small>{props.info}</small>
          </p>
        
        <p className="product_price">
            <small>Php </small>
            <strong>{props.price}</strong>
        </p>
    <div className="product_rating">
    <p>⭐⭐⭐</p>
      
      
    </div>
    </div>

    <img src={props.image} alt=""/>
    <button onClick={addToBasket}>Add to Basket </button>
    </div>
  )
}

export default Product