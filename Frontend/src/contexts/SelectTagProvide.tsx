import { createContext, useContext, useState } from 'react';

export type SelectTagData = {
  id: number;
  stepName: string;
  value?: string | Set<string> | null;
};

interface SelectTagContextProps {
  selectTagList: SelectTagData[];
  setSelectTagList: React.Dispatch<React.SetStateAction<SelectTagData[]>>;
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
  const initialState = [
    {
      id: 1,
      stepName: '연령대',
      value: null,
    },
    {
      id: 2,
      stepName: '성별',
      value: null,
    },
    {
      id: 3,
      stepName: '키워드',
      value: new Set(''),
    },
  ];

  const [selectTagList, setSelectTagList] = useState<SelectTagData[]>(initialState);

  const contextValue: SelectTagContextProps = {
    selectTagList,
    setSelectTagList,
  };

  return <SelectTagContext.Provider value={contextValue}>{children}</SelectTagContext.Provider>;
}
