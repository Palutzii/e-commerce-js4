import { useCart } from "../CartContext";
import React from "react";
import styles from "../styles/Cart.module.css";


const Cart: React.FC = () => {
    const { items, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

    const totalPrice = items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    return(
            <div className={styles.cartPanel}>
                <h2>Shopping Cart</h2>
                <ul className="shopping-cart-list">
                    {items.map((item) => (
                            <li className={styles.cartPanelItem} key={item.id}>
                                <div>
                                    <img src={item.imageUrl} alt={item.name} className={styles.cartItemImage}/>
                                </div>
                                <div className={styles.cartPanelItemInfo}>
                                    <span>{item.name}</span>
                                    <span>{item.quantity} x {item.price}€</span>
                                </div>
                                <div className={styles.cartPanelItemBtnContainer}>
                                    <button onClick={() => increaseQuantity(item.id)} >+</button>
                                    {item.quantity > 1 && (
                                            <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                    )}
                                    {item.quantity === 1 && (
                                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                    )}
                                </div>
                            </li>
                    ))}
                </ul>
                <p className={styles.cartPanelTotal}>Total Price: {totalPrice.toFixed(2)}€</p>
            </div>
    );
};

export default Cart;