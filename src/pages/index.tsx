import ProductCard from '../components/ProductCard';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from "react";
import { IProduct } from "../types";

export default function Home(): JSX.Element {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/products')
                .then(res => res.json())
                .then(data => setProducts(data))
                .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
            <div className={styles.container}>
                <h1 className={styles.title}>
                    Welcome to our Holiday Store!
                </h1>
                <div className={styles.grid}>
                    {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
    );
}