import React from 'react';

interface CamelCaseNameProps {
  name: string;
}

const CamelCaseName: React.FC<CamelCaseNameProps> = ({ name }) => {
  const toCamelCase = (str: string) => {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
        index === 0 ? word.toLowerCase() : word.toUpperCase()
      )
      .replace(/\s+/g, '');
  };

  return <div>{toCamelCase(name)}</div>;
};

export default CamelCaseName;