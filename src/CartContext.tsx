// src/CartContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { IProduct } from './types';

interface CartItem extends IProduct {
    quantity: number;
}

interface CartContextType {
    items: CartItem[];
    addToCart: (product: IProduct) => void;
    increaseQuantity: (productId: string) => void;
    decreaseQuantity: (productId: string) => void;
    removeFromCart: (productId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider: React.FC = ({ children }) => {
    const [items, setItems] = useState<CartItem[]>([]);

    const addToCart = (product: IProduct) => {
        setItems((prevItems) => {
            const itemExists = prevItems.find((item) => item.id === product.id);
            if (itemExists) {
                return prevItems.map((item) =>
                        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const increaseQuantity = (productId: string) => {
        setItems((prevItems) =>
                prevItems.map((item) =>
                        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
                )
        );
    };

    const decreaseQuantity = (productId: string) => {
        setItems((prevItems) => {
            const item = prevItems.find((item) => item.id === productId);
            if (item && item.quantity > 1) {
                return prevItems.map((item) => item.id === productId ? { ...item, quantity: item.quantity - 1}: item);
            } else {
                return prevItems.filter((item) => item.id !== productId);
            }
        });
    };

    const removeFromCart = (productId: string) => {
        setItems((previtems) => previtems.filter((item) => item.id !== productId));
    };

    return (
            <CartContext.Provider value={{ items, addToCart, increaseQuantity, decreaseQuantity, removeFromCart }}>
                {children}
            </CartContext.Provider>
    );
};
