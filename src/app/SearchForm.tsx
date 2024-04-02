import React, { FormEvent, useState } from 'react';

interface Props {
  onSubmit: (city: string) => void;
}

const SearchForm: React.FC<Props> = ({ onSubmit }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(city);
    setCity(''); // Reset after submit
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter City Name"
        className="input text-lg text-gray-900 placeholder-gray-500 border border-gray-300 focus:ring-4 focus:ring-cyan-500 rounded-lg"
      />
      <button
        type="submit"
        className="btn text-lg bg-gradient-to-r from-green-500 to-cyan-600 hover:bg-gradient-to-bl text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 active:scale-95">
        Submit
      </button>
    </form>
  );
};

export default SearchForm;
