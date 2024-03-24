import React, { useState } from 'react';

interface bidProps {
    wallet: string;
    price: number;
    quantity: number;
  }

export const Bid = ({wallet, price, quantity}: bidProps) => {
    
  return (
    <div className="bg-[#333] h-32 rounded-lg px-2">
        <p className="text-xs"> Wallet: {wallet}</p>
        <p className="text-xs">Price: {price}</p>
        <p className="text-xs"> Quantity: {quantity}</p>
    </div> 
  ); 
};
