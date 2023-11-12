import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from "../components/ProductCard";
import { IProduct } from "../types";

jest.mock('next/link', () => {
    return ({ children }) => {
        return children;
    }
});

describe('ProductCard', () => {
    it('renders correctly', () => {
        const mockProduct: IProduct = {
            id: '1',
            name: 'Christmas Lights',
            price: 10.00,
            description: 'Bright and colorful lights.',
            stock: 100
        };

        render(<ProductCard product={mockProduct} />);
        expect(screen.getByText('Christmas Lights')).toBeInTheDocument();
        expect(screen.getByText('10€')).toBeInTheDocument();
    });
});
