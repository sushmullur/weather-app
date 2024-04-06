import React, { useState } from 'react';

interface Props {
  onSubmit: (city: string) => void;
}

const SearchForm: React.FC<Props> = ({ onSubmit }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(city);
    setCity(''); // Optional: Clear the input after submission
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">

      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter City Name"
        className="w-full p-3 mt-2 text-gray-700 bg-white border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-300 ease-in-out"
        style={{ transition: 'all 0.3s ease-in-out' }}
      />

      <button
        type="submit"
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default SearchForm;
