import Loading from 'components/Loading';
import React, { createContext, useContext, useState } from 'react';

type SpinnerContextData = {
  setLoading(isLoading: boolean): void;
  loading: boolean;
};

const SpinnerContext = createContext<SpinnerContextData>({} as SpinnerContextData);

const SpinnerProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);

  return (
    <SpinnerContext.Provider value={{ loading, setLoading }}>
      {children}
      <Loading show={loading} />
    </SpinnerContext.Provider>
  );
};

function useSpinner(): SpinnerContextData {
  const context = useContext(SpinnerContext);

  if (!context) {
    throw new Error('useSpinner must be used within an SpinnerProvider');
  }

  return context;
}

export { SpinnerProvider, useSpinner };
