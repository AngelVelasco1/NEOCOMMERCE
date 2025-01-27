import { Router } from 'express';
import { getProducts } from '../controllers/products';

export const productsRoutes = () => {
    const app = Router();
    app.get("/products", getProducts)
    return app;
}