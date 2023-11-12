import express, { Request, Response } from "express";
import cors from 'cors';
import { products } from './mockData';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/products', (req: Request, res: Response) => {
    res.json(products);
});

app.get('/api/products/:id', (req: Request ,res: Response) => {
    const product = products.find(p => p.id === req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Product not found');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;