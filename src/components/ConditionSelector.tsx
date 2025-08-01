'use client';

import React, { useState, useEffect } from 'react';

interface ConditionSelectorProps {
  onConditionChange: (condition: string) => void;
}

const ConditionSelector: React.FC<ConditionSelectorProps> = ({ onConditionChange }) => {
  const [conditions, setConditions] = useState<string[]>([]);
  const [selectedCondition, setSelectedCondition] = useState<string>('');

  useEffect(() => {
    // In a real app, you'd fetch this from an API
    // For now, we'll use the keys from our imported JSON
    const fetchConditions = async () => {
      const res = await import('@/data/foods.json');
      setConditions(Object.keys(res.default));
    };
    fetchConditions();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const condition = e.target.value;
    setSelectedCondition(condition);
    onConditionChange(condition);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-xs mx-auto">
      <label htmlFor="condition-select" className="mb-2 font-semibold">
        Select Your Health Condition
      </label>
      <select
        id="condition-select"
        value={selectedCondition}
        onChange={handleChange}
        className="p-2 border rounded-md w-full bg-gray-800 text-white"
      >
        <option value="" className="bg-gray-800 text-white">-- Select --</option>
        {conditions.map((condition) => (
          <option key={condition} value={condition} className="bg-gray-800 text-white">
            {condition}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ConditionSelector;
