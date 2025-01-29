"use client"
import { Banner } from "./components/Banner";
import { ProductCard } from "./components/ProductCard";
import React, { useEffect, useState } from "react";
import { getLatestProducts } from "./services/api";
import { IProduct } from "./types/products";

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getLatestProducts();
      setProducts(data);
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
