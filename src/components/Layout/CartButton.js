import React, { useContext, useEffect, useState } from 'react';
import styles from './CartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const CartButton = ({ children, showCartHandler }) => {
  const [btnAnimated, setBtnAnimated] = useState(false);
  const cartCtx = useContext(CartContext);
  const btnClasses = `${styles.button} ${btnAnimated ? styles.bump : ''}`;

  const { items } = cartCtx;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnAnimated(true);

    const timer = setTimeout(() => {
      setBtnAnimated(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [items]);

  const numberOfCartItems = items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  return (
    <button className={btnClasses} onClick={showCartHandler}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>{children}</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
