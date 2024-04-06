// UnitToggle.tsx
import React from 'react';

interface UnitToggleProps {
  isMetric: boolean;
  setIsMetric: React.Dispatch<React.SetStateAction<boolean>>;
}

const UnitToggle: React.FC<UnitToggleProps> = ({ isMetric, setIsMetric }) => (
  <div className="flex items-center justify-center mb-4">
    <span className="mr-2 text-gray-800 dark:text-gray-200">Metric</span>
    <div className="relative w-14 h-8 bg-gray-300 rounded-full shadow-inner cursor-pointer" onClick={() => setIsMetric(!isMetric)}>
      <input type="checkbox" id="toggle" className="sr-only" checked={isMetric} onChange={() => setIsMetric(!isMetric)} />
      <label htmlFor="toggle" className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full shadow transition-transform duration-300 ease-in-out ${isMetric ? 'translate-x-0' : 'translate-x-full'}`}></label>
      <div className={`absolute inset-0 rounded-full transition-colors duration-300 ease-in-out ${isMetric ? 'bg-gray-300' : 'bg-blue-500'}`}></div>
    </div>
    <span className="ml-2 text-gray-800 dark:text-gray-200">Imperial</span>
  </div>
);

export default UnitToggle;
