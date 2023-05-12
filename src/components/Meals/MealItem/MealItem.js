import React from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

const MealItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);

  const itemPrice = `$${price.toFixed(2)}`;

  const addToCart = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{itemPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} addToCart={addToCart} />
      </div>
    </li>
  );
};

export default MealItem;
