import React, { createContext, useContext, useState } from 'react';

type SearchContextData = {
  setValue(value: string): void;
  value: string;
};

const SearchContext = createContext<SearchContextData>({} as SearchContextData);

const SearchProvider: React.FC = ({ children }) => {
  const [value, setValue] = useState('');
  return <SearchContext.Provider value={{ value, setValue }}>{children}</SearchContext.Provider>;
};

function useSearch(): SearchContextData {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearch must be used within an SearchProvider');
  }

  return context;
}

export { SearchProvider, useSearch };
