import conx from "../config/conx.js";

export const getProductsService = async (id: number) => {
    if(!id) {
        const [results] = await conx.query(
            'SELECT p.id, p.name, p.description, p.price, p.stock, MIN(i.imageURL) AS imageURL,MIN(i.colorCode) AS colorCode,MIN(i.color) AS color FROM products p LEFT JOIN images i ON p.id = i.productId GROUP BY p.id, p.name, p.description, p.price, p.stock'
        )
        return results;
    }
    const [results] = await conx.query(
        'SELECT * FROM products INNER JOIN images ON products.id = images.productId WHERE products.id = ?', [id]
    )
    return results
}


export const getLatestProductsService = async () => {
    const [results] = await conx.query(
        'SELECT p.id, p.name, p.description, p.price, p.stock, MIN(i.imageURL) AS imageURL,MIN(i.colorCode) AS colorCode,MIN(i.color) AS color FROM products p LEFT JOIN images i ON p.id = i.productId GROUP BY p.id, p.name, p.description, p.price, p.stock LIMIT 8'
    )
    return results
}
