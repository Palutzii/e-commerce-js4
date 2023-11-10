import Link from "next/link";
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
    return (
            <div className={styles.card}>
                <h2>{product.name}</h2>
                <p>{product.price}€</p>
                <Link href={`/products/${product.id}`}>
                    View Details
                </Link>
            </div>
    );
};

export default ProductCard;