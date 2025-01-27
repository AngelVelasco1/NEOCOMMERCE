import { Router } from 'express';
import { getProducts } from '../controllers/products.js';
export const productsRoutes = () => {
    const app = Router();
    app.get("/products", getProducts)
    return app;
}