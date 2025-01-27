import conx from "../config/conx.js";

export const getProductsService = async () => {
    const [results] = await conx.query('SELECT * FROM products')
    return results;
}