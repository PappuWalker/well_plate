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
          onChange={(e) => {
            onSearchChange(e.target.value);
            if (searchType === 'food') { // If currently showing food list, switch back to disease search
              onSearchTypeChange('disease');
              onConditionChange(''); // Clear selected condition
            }
          }}
          className="p-2 border rounded-md w-full bg-gray-800 text-white"
        />
      </div>
    </div>
  );
};

export default ConditionSelector;
