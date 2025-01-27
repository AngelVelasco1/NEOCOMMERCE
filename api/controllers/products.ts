import { getProductsService } from "../services/products.js";
import { Request, Response } from 'express';

export const getProducts =  async (req: Request, res: Response) => {
    try {
        const products = await getProductsService();
        res.json(products)
    } catch(err) {
        res.status(500).json({ message: err });
    }
}