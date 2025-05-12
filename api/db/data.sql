-- Active: 1731946694269@@127.0.0.1@3306@lights_ecommerce
INSERT INTO COUNTRIES (name, city, deparment) VALUES
('United States', 'Miami', 'Florida'),
('France', 'Paris', 'Île-de-France'),
('Mexico', 'Cancún', 'Quintana Roo'),
('Brazil', 'Rio de Janeiro', 'Rio de Janeiro'),
('Spain', 'Barcelona', 'Catalonia'),
('Colombia', 'Bucaramanga', 'Giron'),
('Germany', 'Berlin', 'Berlin');

INSERT INTO CATEGORIES (name) VALUES
('Lubricantes'),
('Masajes'),
('Aromaticos'),
('Accesorios');

INSERT INTO CUSTOMERS (name, phoneNumber, email, address, countryId) VALUES
('John Doe', '+1 4075550123', 'johndoe@example.com', '123 Elm Street, Miami, Florida', 1),
('Marie Dupont', '+33 612345678', 'marie.dupont@example.fr', '45 Rue de Paris, Paris, Île-de-France', 2),
('Carlos Pérez', '+52 15556789123', 'carlos.perez@ejemplo.com', '789 Calle Falsa, Cancún, Quintana Roo', 3),
('Lucas Oliveira', '+55 21987654321', 'lucas.oliveira@example.br', '101 Avenida Atlântica, Rio de Janeiro, Rio de Janeiro', 4),
('Isabella García', '+34 612345678', 'isabella.garcia@example.es', '202 Calle Mayor, Barcelona, Catalonia', 5),
('Juan Rodríguez', '+57 3101234567', 'juan.rodriguez@example.co', '303 Carrera 15, Bucaramanga, Santander', 6),
('Hans Müller', '+49 15112345678', 'hans.mueller@example.de', '404 Unter den Linden, Berlin, Berlin', 7);

INSERT INTO PRODUCTS (name, description, price, stock, status, categoryId, createdBy, updatedBy) VALUES
('Passion Candle', 'Erotic scented candle with passion fruit aroma', 29.99, 40, 1, 1, 1, NULL),
('Seduction Candle', 'Soy candle with jasmine and vanilla scent', 35.99, 30, 1, 1, 1, 1),
('Desire Massage Oil', 'Warming massage oil with rose and cinnamon', 19.99, 50, 1, 2, 1, NULL),
('Romance Set', 'Gift set with candles and massage oil', 49.99, 20, 1, 3, 1, 1),
('Candle Holder', 'Elegant accessory for sensual candles', 14.99, 100, 1, 4, 1, 1);

INSERT INTO PRODUCTS (name, description, price, stock, status, categoryId, createdBy, updatedBy) VALUES
('Aphrodisiac Oil', 'Sensual massage oil with aphrodisiac properties', 24.99, 60, 1, 2, 1, NULL),
('Relaxing Bath Salts', 'Aromatic bath salts for relaxation', 15.99, 80, 3, 3, 1, 1),
('Luxury Candle', 'Handmade luxury candle with a unique fragrance', 39.99, 25, 1, 1, 1, NULL),
('Massage Stones', 'Set of heated massage stones', 29.99, 35, 1, 4, 1, 1),
('Scent Diffuser', 'Electric scent diffuser with multiple settings', 49.99, 20, 1, 4, 1, 1);
INSERT INTO IMAGES (imageURL, colorCode, color, productId) VALUES
('https://example.com/passion-candle.jpg', '#FF5733', 'Orange', 1),
('https://example.com/passion-candleGreen.jpg', '#EEEEE', 'Green', 1),
('https://example.com/seduction-candle.jpg', '#F0E68C', 'Khaki', 2),
('https://example.com/desire-massage-oil.jpg', '#FF00FF', 'Black', 3),
('https://example.com/romance-set.jpg', '#FF0000', 'Red', 4),
('https://example.com/candle-holder.jpg', '#0000FF', 'Blue', 5);

INSERT INTO IMAGES(imageURL, colorCode, color, productId) 
VALUES (https://m.media-amazon.com/images/I/417tEj3iJ8L._AC_.jpg, #808080, Gray, 1 ),
(https://m.media-amazon.com/images/I/71p-tHQ0u1L._AC_SX679_.jpg, #FFFFFF, White, 1 );


INSERT INTO FRAGANCIES (name, productId) VALUES
('Passion Fruit', 1),
('Jasmine Vanilla', 2),
('Rose Cinnamon', 3),
('Citrus', 4);

INSERT INTO ORDERS (date, status, totalAmount, customerId) VALUES
('2024-11-01', 'pending', 59.98, 1),
('2024-11-02', 'processing', 35.99, 2),
('2024-11-03', 'dispatched', 49.99, 3),
('2024-11-04', 'delivered', 29.99, 4),
('2024-11-05', 'pending', 19.99, 5),
('2024-11-06', 'processing', 14.99, 2),
('2024-11-07', 'dispatched', 29.99, 3),
('2024-11-08', 'delivered', 49.99, 1);

INSERT INTO PRODUCT_BY_ORDER (quantity, salePrice, productId, orderId) VALUES
(2, 29.99, 1, 1),
(1, 35.99, 2, 2),
(1, 49.99, 4, 3),
(1, 29.99, 1, 4),
(1, 19.99, 3, 5),
(1, 14.99, 5, 6),
(1, 29.99, 2, 7),
(1, 49.99, 4, 8);

INSERT INTO ORDERS_LOGS (previousStatus, newStatus, orderId, changedBy) VALUES
('pending', 'processing', 1, 1),
('processing', 'dispatched', 2, 1),
('dispatched', 'delivered', 3, 1),
('pending', 'processing', 4, 2),
('processing', 'dispatched', 5, 2),
('pending', 'processing', 6, 1),
('processing', 'dispatched', 7, 2),
('dispatched', 'delivered', 8, 3);



