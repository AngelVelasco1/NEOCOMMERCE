"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { GrVisa as Visa } from "react-icons/gr";
import { SiMastercard as Mastercard } from "react-icons/si";
import { SiAmericanexpress as Amex } from "react-icons/si";
import { FaCreditCard as Card } from "react-icons/fa";

interface ProductDetailsProps {
  data: any;
}
interface ProductImages {
  color: string;
  colorCode: string;
  image: string;
}
const PaymentIcon = ({ icon: Icon }: { icon: React.ElementType }) => (
  <div className="flex flex-col items-center">
    <Icon className="h-6 w-10" />
  </div>
);

export const ProductDetails = ({ data }: ProductDetailsProps) => {
  const [selectedSize, setSelectedSize] = useState("medium");
  const [selectedColor, setSelectedColor] = useState("blue");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const paymentMethods = [
    { icon: Visa },
    { icon: Mastercard },
    { icon: Amex },
    { icon: Card },
  ];
  return (
    <div className="grid gap-10 md:grid-cols-2 space-y-4 p-4">
      <div className="flex flex-row-reverse w-100">
        <div className="flex-1 relative aspect-square h-5/6 overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={data.images[selectedImage].image}
            alt={data.name}
            fill
            className="object-contain p-8"
            priority
          />
        </div>
        <div className="grid grid-cols-1 w-1/5 h-fit gap-5">
          {data.images.map((image: ProductImages, index: number) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-square overflow-hidden rounded-lg bg-gray-100 ${
                selectedImage === index
                  ? "ring-2 ring-primary ring-offset-2"
                  : ""
              }`}
            >
              <Image
                src={image.image}
                alt={`${data.name} thumbnail ${index + 1}`}
                fill
                className="object-contain "
              />
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold  tracking-wide">{data.name}</h1>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">${data.price}</span>
            </div>
            <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-sm font-semibold text-red-700">
              SAVE {10}%
            </span>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">
            {data.inStock ? "item in stock!" : "item out stock"}
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
            {["blue", "black", "pink"].map((color) => (
              <label
                key={color}
                className={`relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full 
                      ${
                        selectedColor === color &&
                        "ring-2 ring-primary ring-offset-2"
                      }`}
              >
                <RadioGroupItem value={color} className="sr-only" />
                <span
                  className="h-6 w-6 rounded-full"
                  style={{ backgroundColor: color }}
                />
              </label>
            ))}
          </RadioGroup>
        </div>

        <div className="flex items-end gap-5">
          <div className="space-y-2">
            <label className="text-base">Cantidad</label>
            <div className="flex w-fit items-center rounded-lg border">
              <Button
                variant="outline"
                size="icon"
                className="rounded-none text-md"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </Button>
              <div className="w-12 text-center">{quantity}</div>
              <Button
                variant="outline"
                size="icon"
                className="rounded-none text-md   "
                /* When we have the stock by number replace the function to min and the first arg to data.stock */
                onClick={() => setQuantity(Math.max(1, quantity + 1))}
              >
                +
              </Button>
            </div>
          </div>
          <div className="w-10/12 ">
            <Button className="w-10/12 p-6 border-2 border-black" size="lg" variant="outline">
              Añadir al carrito
            </Button>
          </div>
        </div>

        <div className="rounded-lg bg-muted pt-4">
          <div className="flex items-center gap-2">
            <span className="font-medium">
              Envíos gratis: Por compras superiores a 100.000
            </span>
          </div>
        </div>

        <div className="rounded-lg border ">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
            {paymentMethods.map((method, index) => (
              <PaymentIcon key={index} icon={method.icon} />
            ))}
          </div>
          <p className="text-center text-lg font-medium text-gray-900">
            Seguridad Garantizada
          </p>
        </div>
      </div>
    </div>
  );
};
