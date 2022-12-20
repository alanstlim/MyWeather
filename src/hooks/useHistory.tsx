import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { Storage, StorageKeys, StorageType } from 'repository';
import { defaultCities } from 'utils/constants';

type HistoryContextData = {
  cities: string[];
  setCities(cities: string[]): void;
  saveHistory(): void;
};

const HistoryContext = createContext<HistoryContextData>({} as HistoryContextData);

const HistoryProvider: React.FC = ({ children }) => {
  const [cities, setCities] = useState<string[]>([]);

  const saveHistory = useCallback(() => {
    Storage.setItem<StorageType.IHistory>(StorageKeys.CITIES, {
      cities,
    });
  }, []);

  useEffect(() => {
    Storage.getItem<StorageType.IHistory>(StorageKeys.CITIES).then((history) => {
      if (history) {
        return setCities(history.cities);
      }
      return setCities(defaultCities);
    });
  }, [saveHistory]);

  return (
    <HistoryContext.Provider value={{ cities, setCities, saveHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

function useHistory(): HistoryContextData {
  const context = useContext(HistoryContext);

  if (!context) {
    throw new Error('useHistory must be used within an HistoryProvider');
  }

  return context;
}

export { HistoryProvider, useHistory };
