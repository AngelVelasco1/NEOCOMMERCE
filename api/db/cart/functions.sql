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


CREATE OR REPLACE PROCEDURE deleteProductToCart(p_userId INT, p_productId INT)

    LANGUAGE plpgsql
    AS $$
    BEGIN
        DELETE FROM cart_items WHERE productId = p_productId
        AND cartId = (SELECT id FROM cart WHERE userId = p_userId);

    END;
    $$;


CREATE PROCEDURE updateProductToCart(p_userId INT, p_productId INT, p_quantity INT) 
   LANGUAGE plpgsql
    AS $$
    BEGIN
        UPDATE cart_items 
        SET quantity = p_quantity 
        WHERE productId = p_productId
        AND cartId = (SELECT id FROM cart WHERE userId = p_userId);
    END;
    $$;

