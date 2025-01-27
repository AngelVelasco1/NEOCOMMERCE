"use client"
import React from 'react';
import {useContext, createContext, useState, ReactNode} from 'react';
import {ProductImage} from "../page";

export interface CartProductsInfo {
    id: number;
    color: string;
    colorCode: string;
    imageURL: string;
    name: string;
    price: number;
    size: string;
    quantity: number;
}
interface CartProductsContext {
    cartProducts: CartProductsInfo[],
    addProductToCart: (product: CartProductsInfo) => void,
    updateQuantity: (id: number, color: string, quantity: number) => void,
    removeProductCart: (id: number, color: string) => void;
}

const CartContext = createContext<CartProductsContext | undefined>(undefined) ;

export const CartProvider = ({children}: {children: ReactNode}) => {
    const [cartProducts, setCartProduct] = useState<CartProductsInfo[]>([]);

    const addProductToCart = (product: CartProductsInfo) => {
        setCartProduct((prevCart) => {
            const existingProduct = prevCart.find(
              (item) => item.id === product.id && item.color === product.color
            );
            if (existingProduct) {
              return prevCart.map((item) =>
                item.id === product.id && item.color === product.color
                  ? { ...item, quantity: item.quantity + product.quantity }
                  : item
              );
            }
            return [...prevCart, product];
          })
        }

    const updateQuantity = (id: number, color: string, quantity: number) => {
        setCartProduct((prevCart) =>
          prevCart.map((product) =>
            product.id === id && product.colorCode === color ? { ...product, quantity } : product
          )
        );
      };

    const removeProductCart = (id: number, color: string) => {
        setCartProduct((prev) => prev.filter((product) => !(product.id === id && product.colorCode == color)))
    }

    return (
    <CartContext.Provider value={{ cartProducts, addProductToCart, updateQuantity, removeProductCart }}>
        {children}
    </CartContext.Provider>
    )
}
// create an function

export const useCart = () => {
    const context = useContext(CartContext);
    if(!context) {
        throw new Error("use cart must be within a provider")
    }
    return context;
}

  