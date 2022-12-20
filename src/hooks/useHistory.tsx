import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { Storage, StorageKeys, StorageType } from 'repository';
import { defaultCities } from 'utils/constants';

type HistoryContextData = {
  cities: string[];
  saveHistory(history: string[]): void;
};

const HistoryContext = createContext<HistoryContextData>({} as HistoryContextData);

const HistoryProvider: React.FC = ({ children }) => {
  const [cities, setCities] = useState<string[]>([]);

  const saveHistory = useCallback((history: string[]) => {
    if (history.length >= 10) {
      Storage.setItem<StorageType.IHistory>(StorageKeys.CITIES, {
        cities: history,
      });
      setCities(history);
    }
  }, []);

  useEffect(() => {
    setCities(defaultCities);
    Storage.getItem<StorageType.IHistory>(StorageKeys.CITIES).then((history) => {
      if (history) {
        saveHistory(history.cities);
      }
    });
  }, [saveHistory]);

  return (
    <HistoryContext.Provider value={{ cities, saveHistory }}>{children}</HistoryContext.Provider>
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
