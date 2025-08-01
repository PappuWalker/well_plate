'use client';

import React, { useState } from 'react';
import ConditionSelector from '@/components/ConditionSelector';
import FoodList from '@/components/FoodList';

export default function SearchPage() {
  const [selectedCondition, setSelectedCondition] = useState('');

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-8">
        Find Foods for Your Condition
      </h1>
      <ConditionSelector onConditionChange={setSelectedCondition} />
      <FoodList condition={selectedCondition} />
    </main>
  );
}
