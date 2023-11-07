import React, { useState } from 'react';

const CamelCaseInput: React.FC = () => {
  const [input, setInput] = useState('');
  const [camelCaseOutput, setCamelCaseOutput] = useState('');

  const toCamelCase = (str: string) => {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (word, index) =>
        index === 0 ? word.toLowerCase() : word.toUpperCase()
      )
      .replace(/\s+/g, '');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInput(value);
    setCamelCaseOutput(toCamelCase(value));
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        className="border-2 border-gray-300 p-2 rounded-md"
        placeholder="Enter text"
      />
      <div className="text-lg font-semibold">
        CamelCase: {camelCaseOutput}
      </div>
    </div>
  );
};

export default CamelCaseInput;