import { getProductsService } from "../services/products.js";
import { Request, Response } from 'express';

export const getProducts =  async (req: Request, res: Response) => {
    try {
        const {id} = req.query;

        const products = await getProductsService(Number(id));
        res.json(products);
    } catch(err) {
        res.status(500).json({ message: err });
    }
}

