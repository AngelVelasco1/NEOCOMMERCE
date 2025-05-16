"use client";
import React, { useState, useCallback } from "react";
import { IProduct } from "../types";
import { Button } from "../../components/ui/button";
import { PriceSelector } from "./PriceSelector";

interface FilterProps {
  products: IProduct[];
  setFilteredProducts: (products: IProduct[]) => void;
}

export const Filter = ({ products, setFilteredProducts }: FilterProps) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState({min: 1, max: 5000})

  const handleColorFilter = (color: string | null) => {
    setSelectedColor(color);
    if (color && selectedCategory !== null) {
      setFilteredProducts(products.filter((product) => product.colorCode === color && product.category === selectedCategory))

    } else if(color) {
      setFilteredProducts(products.filter((product) => product.colorCode === color))
    }
      else {
      setFilteredProducts(products);
    }
  };

  const handleCategoryFilter = (category: string | null) => {
    setSelectedCategory(category)
    if (category && selectedColor !== null) {
      setFilteredProducts(products.filter((product) => product.category === category  && product.colorCode === selectedColor))
    }
    else if (category)
      setFilteredProducts(products.filter((product) => product.category === category))
    else {
      setFilteredProducts(products)
    }
  }

  const handlePriceFilter = useCallback((min: number, max: number) => {
    setPriceRange({min, max})
    setFilteredProducts(products.filter((product) => product.price >= min && product.price <= max));
  }, [priceRange])


  const clearFilters = () => {
    setFilteredProducts(products)
    setSelectedCategory(null)
    setSelectedColor(null)   
  }

  const Colors = Array.from(new Set(products.map(product => product.colorCode).filter(colorCode => colorCode !== null)));
  const Categories = Array.from(new Set(products.map(product => product.category).filter(category => category !== null)))

  return (
    <div className="flex flex-col px-16 gap-y-4 ms-6">
      <div>
        <Button onClick={() => clearFilters()}>Clear Filters</Button>
      </div>
    <h3>Colors</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-3 ">
        {Colors.map((color) => {
            return (
              <button
                onClick={() => handleColorFilter(color)}
                className={
                  selectedColor === color
                    ? "w-9 h-9 rounded-md transition-transform transform hover:scale-95  outline-none ring-2 ring-offset-2 ring-blue-500"
                    : "w-9 h-9 rounded-md transition-transform transform hover:scale-105 "
                }
                key={color}
                style={{ backgroundColor: color }}
              ></button>
            );
        })}
      </div>
      <h3>Categories</h3>

      <div className="flex flex-col gap-y-3">
      {Categories.map((category) => {
            return (
              <Button onClick={() => handleCategoryFilter(category)} variant="outline" className={selectedCategory === category ?  "w-fit bg-slate-800 text-white transition-transform transform hover:scale-105" : "w-fit transition-transform transform hover:scale-105"} key={category}>{category}</Button>
            );
        })}
      </div>
      <h3>Price</h3>

      <div className="flex flex-col gap-y-2">
        <PriceSelector 
        minLimit={1}
        maxLimit={5000}
        initialMin={priceRange.min}
        initialMax={priceRange.max}
        onChangePrice={handlePriceFilter}

        />
      </div>
    </div>
  );
};
