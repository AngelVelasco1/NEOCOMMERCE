"use client ";
import React from "react";
import { useCart } from "../hooks/useCart";
import Image from "next/image";
import { SetQuantity } from "./SetQuantity";
import { Button } from "@/app/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/ui/table";

export default function CartProduct() {
  const { cartProducts, updateQuantity, removeProductCart } = useCart();
  console.log(cartProducts);
  
  const getSubTotal = () => cartProducts.reduce((total, product) => total + product.quantity * product.price, 0);
  return (
    <>
    <Table className="container m-auto">
      {cartProducts.length > 0 ? null : <TableCaption>Your cart is empty</TableCaption>}
      <TableHeader className="">
        <TableRow>
          <TableHead className="">Product</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
          {cartProducts.map((product) => (
            <TableRow
              className=""
              key={`${product.id}-${product.colorCode}`}
            >
              <TableCell className="font-medium flex">
                {" "}
                <Image
                  src={product.imageURL}
                  alt="product"
                  width={150}
                  height={150}
                  className="object-contain"
                ></Image>
                <div className="flex flex-col gap-4 ms-2">
                  <p>{product.name}</p>
                  <p>{product.size}</p>
                  <div
                    key={product.colorCode}
                    className="w-8 h-8 rounded-full ring-2 ring-blue-500"
                    style={{ backgroundColor: product.colorCode }}>

                  </div>
                  <Button
                  variant={"outline"}
                onClick={() =>
                  removeProductCart(product.id, product.colorCode)
                }
              >
                Remove
              </Button>
                </div>
              </TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>
                {" "}
                <SetQuantity
                  key={product.id}
                  cartProduct={product}
                  handleDecrease={() =>
                    updateQuantity(
                      product.id,
                      product.colorCode,
                      Math.max(1, product.quantity - 1)
                    )
                  }
                  handleIncrease={() =>
                    updateQuantity(
                      product.id,
                      product.colorCode,
                      product.quantity + 1
                    )
                  }
                />
              </TableCell>
              <TableCell className="text-right">
                ${Math.ceil(product.price * product.quantity)}
              </TableCell>
          
            </TableRow>
          ))}
      </TableBody>
    
      {cartProducts.length > 0 ? 
      <div className="flex justify-end min-w-max">
      Subtotal: {getSubTotal()}
      </div> 
    : null}
    </Table>
    </>
  );
}
