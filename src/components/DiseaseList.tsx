'use client';

import React from 'react';
import foodData from '@/data/foods.json';

interface DiseaseListProps {
  searchTerm: string;
  onDiseaseSelect: (disease: string) => void;
}

const DiseaseList: React.FC<DiseaseListProps> = ({ searchTerm, onDiseaseSelect }) => {
  const allDiseases = Object.keys(foodData);
  const filteredDiseases = allDiseases.filter(disease =>
    disease.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!searchTerm) {
    return null;
  }

  return (
    <div className="mt-8 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Search Results for "{searchTerm}"
      </h2>
      <ul className="space-y-2">
        {filteredDiseases.map((disease) => (
          <li
            key={disease}
            onClick={() => onDiseaseSelect(disease)}
            className="flex justify-between items-center p-3 bg-gray-800 text-white rounded-md shadow-sm cursor-pointer hover:bg-gray-700"
          >
            <span>{disease}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiseaseList;
