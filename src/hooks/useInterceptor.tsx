import { AxiosError } from 'axios';
import api from 'providers/api';
import React, { createContext, useContext, useEffect } from 'react';
import { useSpinner } from './useSpinner';

type InterceptorContextData = {};

const InterceptorContext = createContext<InterceptorContextData>({} as InterceptorContextData);

const InterceptorProvider: React.FC = ({ children }) => {
  const { setLoading } = useSpinner();

  useEffect(() => {
    api.interceptors.request.use((request) => {
      setLoading(true);
      return request;
    });

    api.interceptors.response.use(
      (response) => {
        setLoading(false);
        return response;
      },
      (error: AxiosError) => {
        setLoading(false);
        return Promise.reject(error);
      }
    );
  }, []);

  return <InterceptorContext.Provider value={{}}>{children}</InterceptorContext.Provider>;
};

function useInterceptor(): InterceptorContextData {
  const context = useContext(InterceptorContext);

  if (!context) {
    throw new Error('useInterceptor must be used within an InterceptorProvider');
  }

  return context;
}

export { InterceptorProvider, useInterceptor };
