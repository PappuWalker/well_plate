'use client';

import React, { useState } from 'react';
import foodData from '@/data/foods.json';
import { useCart } from '@/context/CartContext';

interface FoodListProps {
  condition: string;
}

// A type assertion to tell TypeScript that `condition` can be a key of `foodData`
type FoodData = typeof foodData;

const FoodList: React.FC<FoodListProps> = ({ condition }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState<string[]>([]);

  if (!condition) {
    return <p className="text-center mt-4">Please select a condition to see food recommendations.</p>;
  }

  const foods = foodData[condition as keyof FoodData] || [];

  const handleAddToCart = (food: string) => {
    addToCart({ name: food, quantity: 1 });
    setAdded([...added, food]);
  };

  return (
    <div className="mt-8 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Recommended Foods for {condition}
      </h2>
      <ul className="space-y-2">
        {foods.map((food) => (
          <li key={food} className="flex justify-between items-center p-3 bg-gray-800 text-white rounded-md shadow-sm">
            <span>{food}</span>
            <button
              onClick={() => handleAddToCart(food)}
              className={`px-3 py-1 rounded ${
                added.includes(food)
                  ? 'bg-green-500 text-white'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
              disabled={added.includes(food)}
            >
              {added.includes(food) ? 'Added' : 'Add to Cart'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
