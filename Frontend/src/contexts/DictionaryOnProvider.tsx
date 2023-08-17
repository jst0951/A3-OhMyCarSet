import { createContext, useContext, useState } from 'react';

interface DictionaryOnContextProps {
  dictionaryOn: boolean;
  setDictionaryOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const DictionaryOnContext = createContext<DictionaryOnContextProps | undefined>(undefined);

export const useDictionaryOnContext = () => {
  const context = useContext(DictionaryOnContext);
  if (!context) {
    throw new Error('Cannot find DictionaryOnProvider');
  }
  return context;
};

interface DictionaryOnProviderProps {
  children: React.ReactNode;
}

export default function DictionaryOnProvider({ children }: DictionaryOnProviderProps) {
  const [dictionaryOn, setDictionaryOn] = useState(false);

  const contextValue: DictionaryOnContextProps = {
    dictionaryOn,
    setDictionaryOn,
  };

  return <DictionaryOnContext.Provider value={contextValue}>{children}</DictionaryOnContext.Provider>;
}
