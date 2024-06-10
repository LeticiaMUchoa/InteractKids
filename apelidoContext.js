// apelidoContext.js
import React, { createContext, useContext, useState } from 'react';

const ApelidoContext = createContext();

export const ApelidoProvider = ({ children }) => {
  const [apelido, setApelido] = useState('');

  return (
    <ApelidoContext.Provider value={{ apelido, setApelido }}>
      {children}
    </ApelidoContext.Provider>
  );
};

export const useApelido = () => {
  return useContext(ApelidoContext);
};
