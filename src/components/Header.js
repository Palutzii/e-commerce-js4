import Link from "next/link";
import styles from '../styles/Header.modules.css';

const Header = () => {
    return (
            <header className={styles.header}>
                <div className={styles.logo}>
                    <Link href={"/"}>
                        Holiday Store
                    </Link>
                </div>
                <nav>
                    <Link href={"/products"}>
                        <span className={styles.navItem}>Products</span>
                    </Link>
                </nav>
            </header>
    );
};

export default Header;