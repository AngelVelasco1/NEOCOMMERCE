"use client"

import { Button } from "@/components/ui/button";
import { CartProductsInfo } from "../hooks/useCart";
import React from 'react';

interface setQuantityProps {
    cartCounter?: boolean,
    cartProduct?: Partial<CartProductsInfo>,
    handleIncrease: () => void,
    handleDecrease: () => void
}
export const SetQuantity: React.FC<setQuantityProps> = ({cartCounter, cartProduct, handleIncrease, handleDecrease}) => { 
  return (
        <div className="space-y-2">
           {cartCounter ? null : 
            <div className="flex w-fit items-center rounded-lg ">
              <Button
                variant="outline"
                size="icon"
                className="rounded-none text-md"
                onClick={handleDecrease}
              >
                -
              </Button>
              <div className="w-12 text-center">{cartProduct?.quantity}</div>
              <Button
                variant="outline"
                size="icon"
                className="rounded-none text-md"
                onClick={handleIncrease}
              >
                +
              </Button>
            </div>
           } 
        </div>
 
    )
};