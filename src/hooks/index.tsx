import React from 'react';
import { HistoryProvider } from './useHistory';
import { SearchProvider } from './useSearch';

const Hooks: React.FC = ({ children }) => (
  <SearchProvider>
    <HistoryProvider>{children}</HistoryProvider>
  </SearchProvider>
);

export default Hooks;
