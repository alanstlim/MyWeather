import React from 'react';
import { HistoryProvider } from './useHistory';
import { InterceptorProvider } from './useInterceptor';
import { SearchProvider } from './useSearch';
import { SpinnerProvider } from './useSpinner';

const Hooks: React.FC = ({ children }) => (
  <SpinnerProvider>
    <SearchProvider>
      <HistoryProvider>
        <InterceptorProvider>{children}</InterceptorProvider>
      </HistoryProvider>
    </SearchProvider>
  </SpinnerProvider>
);

export default Hooks;
