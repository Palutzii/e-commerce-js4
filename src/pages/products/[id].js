import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ProductDetails() {
    const [product, setProduct] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
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
            <div>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>{product.price}€</p>
                <p>In stock: {product.stock}</p>
                {/* Add to cart functionality here */}
            </div>
    );
}