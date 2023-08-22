import { createContext, useContext, useState } from 'react';

export type SelectTagData = {
  age: number;
  gender: string | null;
  tag1: string | null;
  tag2: string | null;
  tag3: string | null;
};

interface SelectTagContextProps {
  selectTag: SelectTagData;
  setSelectTag: React.Dispatch<React.SetStateAction<SelectTagData>>;
}

const SelectTagContext = createContext<SelectTagContextProps | undefined>(undefined);

export const useSelectTagContext = () => {
  const context = useContext(SelectTagContext);
  if (!context) {
    throw new Error('Cannot find SelectTagContext');
  }
  return context;
};

interface SelectTagProviderProps {
  children: React.ReactNode;
}

export default function SelectTagProvider({ children }: SelectTagProviderProps) {
  const initialState = {
    age: 0,
    gender: null,
    tag1: null,
    tag2: null,
    tag3: null,
  };

  const [selectTag, setSelectTag] = useState<SelectTagData>(initialState);

  const contextValue: SelectTagContextProps = {
    selectTag,
    setSelectTag,
  };

  return <SelectTagContext.Provider value={contextValue}>{children}</SelectTagContext.Provider>;
}
