CREATE PROCEDURE addProductToCart(p_userId INT, p_productId INT, p_quantity INT) 
   LANGUAGE plpgsql
    AS $$
    BEGIN
        INSERT INTO cart_items (cartId, productId, quantity, unitPrice, expiresAt) 
        VALUES (
        (SELECT id FROM cart WHERE userId = p_userId),
        p_productId,
        p_quantity,
        (SELECT price FROM products WHERE id = p_productId),
        NOW() + INTERVAL '30 days');
    END;
    $$;

/*********************************************/
/*Función para eliminar productos del carrito*/
/*********************************************/

CREATE OR REPLACE PROCEDURE delete_ProductToCart(p_userId INT, p_productId INT)

    LANGUAGE plpgsql
    AS $$
    BEGIN
        DELETE FROM cart_items WHERE productId = p_productId
        AND cartId = (SELECT id FROM cart WHERE userId = p_userId);
    END;
    $$;

/***********************************************/
/*Función para actualizar productos del carrito*/
/***********************************************/

CREATE PROCEDURE update_ProductToCart(p_userId INT, p_productId INT, p_quantity INT) 

   LANGUAGE plpgsql
    AS $$
    BEGIN
        UPDATE cart_items 
        SET quantity = p_quantity 
        WHERE productId = p_productId
        AND cartId = (SELECT id FROM cart WHERE userId = p_userId);
    END;
    $$;
