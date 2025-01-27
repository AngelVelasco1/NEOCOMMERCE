import conx from "../config/conx.js";

export const getProductsService = async (id: number) => {
    if(!id) {
        const [results] = await conx.query(
            'SELECT * FROM products INNER JOIN images ON products.id = images.productId'
        )
        return results;
    }
    const [results] = await conx.query(
        'SELECT * FROM products INNER JOIN images ON products.id = images.productId WHERE products.id = ?', [id]
    )
    return results
}

