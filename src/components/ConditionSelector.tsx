'use client';

import React, { useState, useEffect } from 'react';

interface ConditionSelectorProps {
  onConditionChange: (condition: string) => void;
  onSearchChange: (searchTerm: string) => void;
  searchTerm: string;
  searchType: string;
  onSearchTypeChange: (searchType: string) => void;
  selectedCondition: string;
}

const ConditionSelector: React.FC<ConditionSelectorProps> = ({
  onConditionChange,
  onSearchChange,
  searchTerm,
  searchType,
  onSearchTypeChange,
  selectedCondition,
}) => {
  const [conditions, setConditions] = useState<string[]>([]);

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
    onConditionChange(condition);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto">
      <label htmlFor="condition-select" className="mb-2 font-semibold text-white">
        Select Your Health Condition
      </label>
      <div className="flex w-full items-center gap-2">
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
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="p-2 border rounded-md w-full bg-gray-800 text-white"
        />
      </div>
      <div className="flex items-center mt-2">
        <button
          onClick={() => onSearchTypeChange('food')}
          className={`px-3 py-1 rounded-l-md text-sm ${
            searchType === 'food' ? 'bg-blue-500 text-white' : 'bg-gray-700'
          }`}
        >
          Food
        </button>
        <button
          onClick={() => onSearchTypeChange('disease')}
          className={`px-3 py-1 rounded-r-md text-sm ${
            searchType === 'disease' ? 'bg-blue-500 text-white' : 'bg-gray-700'
          }`}
        >
          Disease
        </button>
      </div>
    </div>
  );
};

export default ConditionSelector;
