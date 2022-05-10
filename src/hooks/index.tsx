import React from 'react';
import { SearchProvider } from './useSearch';

const Hooks: React.FC = ({ children }) => <SearchProvider>{children}</SearchProvider>;

export default Hooks;
