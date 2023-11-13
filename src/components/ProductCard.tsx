import Link from "next/link";
import styles from '../styles/ProductCard.module.css';
import React from "react";
import { IProduct } from "../types";
import { useCart } from "../CartContext";

interface ProductCardProps {
    product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart } = useCart();

    return (
            <div className={styles.card}>
                <div className={styles.productImageContainer}>
                    <img src={product.imageUrl} alt={product.name} className={styles.productImage}/>
                </div>
                <div className={styles.cardInfo}>
                    <h2>{product.name}</h2>
                    <p>{product.price}€</p>
                    <button onClick={() => addToCart(product)} >Add to Cart</button>
                    <Link href={`/products/${product.id}`}>
                        View Details
                    </Link>
                </div>
            </div>
    );
};

export default ProductCard;