import React from 'react';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = ({ hideCartHandler }) => {
  const cartCtx = useContext(CartContext);
  const { totalAmount } = cartCtx;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      {...item}
      onAdd={cartItemAddHandler.bind(null, item)}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
    />
  ));
  return (
    <Modal hideCartHandler={hideCartHandler}>
      <ul className={styles['cart-items']}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total Amount:</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button-alt']} onClick={hideCartHandler}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
