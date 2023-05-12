import React from 'react';
import styles from './Header.module.css';
import mealsPics from '../../assets/meals.jpg';
import CartButton from './CartButton';

const Header = ({ showCartHandler }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <CartButton showCartHandler={showCartHandler}>Your Cart</CartButton>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsPics} alt="meals pics" />
      </div>
    </>
  );
};

export default Header;
