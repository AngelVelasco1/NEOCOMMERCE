"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {   useState } from "react";
import { useCart } from "../hooks/useCart";
import { PaymentIcon, paymentMethods } from "./PaymentIcon";
import { SetQuantity } from "./SetQuantity";
import React from 'react';

interface ProductDetailsProps {
  data: any;
}

export const ProductDetails = ({ data }: ProductDetailsProps) => {
  const { addProductToCart, cartProducts, updateQuantity } = useCart();
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("small");
  
console.log(data);

  const handleAddToCart = () => {
    const product = {
      id: data[0].id,
      color: selectedColor,
      colorCode: data[selectedImage].colorCode,
      imageURL: data[selectedImage].imageURL,
      name: data[0].name,
      price: data[0].price,
      quantity: quantity,
      size: selectedSize,
      total: data[0].price * quantity,
    };
    addProductToCart(product);
  };

  const cartProduct = cartProducts.find((product) => product.id === data.id);

  const handleIncrease = () => {
    if (cartProduct) {
      updateQuantity(cartProduct.id, cartProduct.colorCode, cartProduct.quantity + 1);
    } else {
      setQuantity((prev) => prev + 1); 
    }
  };
  
  const handleDecrease = () => {
    if (cartProduct) {
      updateQuantity(cartProduct.id, cartProduct.colorCode, Math.max(1, cartProduct.quantity - 1));
    } else {
      setQuantity((prev) => Math.max(1, prev - 1)); 
    }
  };


  const handleImageChange = (index: number, color: string) => {
    if (color === selectedColor) {
      setSelectedImage(index);
    } else {
      setSelectedColor(color);
      const firstImageIndex = data.findIndex(
        (img) => img.color === color
      );
      setSelectedImage(firstImageIndex !== -1 ? firstImageIndex : 0);
    }
  };

  return (
    <div className="grid gap-10 md:grid-cols-2 space-y-4 p-4">
      <div className="flex flex-row-reverse">
        <div className="flex-1 relative aspect-square  rounded-lg bg-gray-100">
          <Image
            src={data[selectedImage].imageURL}
            alt={data.name}
            width={460}
            height={460}
            className="object-contain p-8 z-40"
            priority
          />
        </div>
        <div className="grid grid-cols-1 w-1/5 h-fit gap-5 m-auto">
          {data.map((image, index: number) => (
            <button
              key={index}
              onClick={() => handleImageChange(index, image.color)}
              className={`relative aspect-square overflow-hidden rounded-lg bg-gray-100 ${
                selectedImage === index
                  ? "ring-2 ring-primary ring-offset-2"
                  : ""
              }`}
            >
              <Image
                src={image.imageURL}
                alt={`${data.name} thumbnail ${index + 1}`}
                fill
                className="object-contain"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h1 className="text-3xl line-clamp-3 font-semibold  tracking-wide">
            {data.name}
          </h1>
          <h4 className="text-lg line-clamp-3">{data[0].description}</h4>

          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">${data[0].price}</span>
            </div>
            <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-sm font-semibold text-red-700">
              SAVE {10}%
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <p
            className={
              data.stock > 0
                ? "text-sm text-muted-foreground font-bold text-teal-500"
                : "text-sm text-muted-foreground font-bold text-rose-500"
            }
          >
            {data.stock > 0 ? "item in stock" : "item out stock"}
          </p>
          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full bg-primary"
              style={{ width: `${(data.stock / 20) * 100}%` }}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <label className="text-base">Tamaño: {selectedSize}</label>
          </div>
          <RadioGroup
            defaultValue={selectedSize}
            onValueChange={setSelectedSize}
            className="flex flex-wrap gap-3"
          >
            {["small", "medium", "large"].map((size) => (
              <label
                key={size}
                className={`flex cursor-pointer items-center justify-center rounded-md border px-3 py-2 text-sm
                      ${
                        selectedSize === size &&
                        "border-2 border-black bg-black text-white"
                      }`}
              >
                <RadioGroupItem value={size} className="sr-only" />
                {size.charAt(0).toUpperCase() + size.slice(1)}
              </label>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <label className="text-base">Color: {selectedColor}</label>
          <RadioGroup
            defaultValue={selectedColor}
            onValueChange={setSelectedColor}
            className="flex gap-3"
          >
            {data
              .map((img) => img.color)
              .filter(
                (value: string, index: number, self: Array<string>) =>
                  self.indexOf(value) === index
              )
              .map((color: string) => (
                <button
                  key={color}
                  onClick={() => handleImageChange(0, color)} // Default to the first image of the selected color
                  className={`w-8 h-8 rounded-full ${
                    selectedColor === color ? "ring-2 ring-blue-500" : ""
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
          </RadioGroup>
        </div>

        <div className="flex items-end gap-5">
          <SetQuantity
            cartProduct={cartProduct || {quantity}}
            handleDecrease={() => handleDecrease()}
             /* When we have the stock by number replace the function to min and the first arg to data.stock */
             /* handleIncrease={() => setQuantity((prev) => Math.min(prev + 1, data.stock))} */
            handleIncrease={() => handleIncrease()}
          />
          <div className="w-10/12">
            <Button
              onClick={() => handleAddToCart()}
              className="w-10/12 p-6 border-2 border-black"
              size="lg"
              variant="outline"
            >
              Añadir al carrito
            </Button>
          </div>
        </div>

        <div className="bg-muted pt-4">
          <div className="flex items-center gap-2">
            <span className="font-medium">
              Envíos gratis: Por compras superiores a 100.000
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
          {paymentMethods.map((method, index) => (
            <PaymentIcon key={index} icon={method.icon} />
          ))}
          <p className="text-center text-lg font-medium text-gray-900">
            Seguridad Garantizada
          </p>
        </div>
      </div>
    </div>
  );
};
