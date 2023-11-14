import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IProduct } from "../../types";
import styles from '../../styles/ProductDetails.module.css';
import { useCart } from "../../CartContext";

export default function ProductDetails(): JSX.Element {
    const [product, setProduct] = useState<IProduct | null>(null);
    const router = useRouter();
    const { id } = router.query;
    const { addToCart } = useCart();

    useEffect(() => {
        if (typeof id === 'string') {
            fetch(`http://localhost:3001/api/products/${id}`)
                    .then(res => res.json())
                    .then(data => setProduct(data))
                    .catch(error => console.error('Error fetching data: ', error));
        }
    }, [id]);

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
            <div className={styles.contentWrapper}>
                <div className={styles.imageContainer}>
                    <img src={product.imageUrl} alt={product.name} className={styles.productDetailsImage}/>
                </div>
                <div className={styles.detailsContainer}>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>{product.price}€</p>
                    <p>In stock: {product.stock}</p>
                    <button className={styles.addBtn} onClick={() => addToCart(product)} >Add to Cart</button>
                </div>
                {/* Add to cart functionality here */}
            </div>
    );
}