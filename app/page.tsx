"use client"
import { Banner } from "./components/Banner";
import { ProductCard } from "./components/ProductCard";
import React, { useEffect, useState } from "react";
import { getProducts } from "./services/api";

export interface ProductImage {
  color: string;
  colorCode: string;
  image: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  images: ProductImage[];
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      
      const productsMap: { [key: number]: Product } = {};
      data.map((item: any) => {
        if (!productsMap[item.productId]) {
          productsMap[item.productId] = {
            id: item.productId,
            name: item.name,
            description: item.description,
            price: item.price,
            stock: item.stock,
            images: [],
          };
        }
        productsMap[item.productId].images.push({
          color: item.color,
          colorCode: item.colorCode,
          image: item.imageURL,
        });
      });

      setProducts(Object.values(productsMap));
    };

    fetchProducts();
  }, []);
  return (
    
      <div className="container mx-auto">
        <div>
          <Banner />
        </div>
        <h3 className="text-2xl">Ultimos Productos</h3>
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 
          2xl:grid-cols-5 gap-10 p-4`}
        >
          {products.map((product) => {
            return <ProductCard key={product.id} data={product} />;
          })}
        </div>
      </div>
  );
}
