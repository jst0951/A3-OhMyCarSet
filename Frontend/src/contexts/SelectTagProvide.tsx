import { createContext, useContext, useState } from 'react';

export type SelectTagData = {
  id: number;
  stepName: string;
  age?: number;
  sex?: string;
  keyword1?: string;
  keyword2?: string;
  keyword3?: string;
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
      age: 0,
    },
    {
      id: 2,
      stepName: '성별',
      sex: '선택 전',
    },
    {
      id: 3,
      stepName: '키워드',
      keyword1: '선택 전',
      keyword2: '선택 전',
      keyword3: '선택 전',
    },
  ];

  const [selectTagList, setSelectTagList] = useState<SelectTagData[]>(initialState);

  const contextValue: SelectTagContextProps = {
    selectTagList,
    setSelectTagList,
  };

  return <SelectTagContext.Provider value={contextValue}>{children}</SelectTagContext.Provider>;
}
