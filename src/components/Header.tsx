import Link from "next/link";
import styles from '../styles/Header.module.css';
import Cart from "./Cart";
import {useCart} from "../CartContext";
import {useState} from "react";

const Header = () => {
    const { items } = useCart();
    const totalItems = items.reduce((total, item) => total + item.quantity, 0);
    const [isCartVisible, setIsCartVisible] = useState(false);

    return (
            <header className={styles.header}>
                <div className={styles.logo}>
                    <Link href={"/"}>
                        Holiday Store
                    </Link>
                </div>
                <nav>
                    <Link href={"/"}>
                        <span className={styles.navItem}>Home</span>
                    </Link>

                </nav>
                <div className={styles.cartIconContainer} onClick={() => setIsCartVisible(!isCartVisible)}>
                    <span className={styles.cartBadge} >{totalItems}</span>
                    🛒
                </div>
                {isCartVisible && <Cart />}
            </header>
    );
};

export default Header;