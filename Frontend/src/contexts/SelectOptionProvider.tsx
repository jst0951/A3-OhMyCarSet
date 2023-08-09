import { createContext, useContext, useState } from 'react';

export type SelectOptionData = {
  id: number;
  stepName: string;
  selectedName: string | null;
  price: number | null;
  imgSrc: string | null;
};

interface SelectOptionContextProps {
  selectOptionList: SelectOptionData[];
  setSelectOptionList: React.Dispatch<React.SetStateAction<SelectOptionData[]>>;
}

const SelectOptionContext = createContext<SelectOptionContextProps | undefined>(undefined);

export const useSelectOptionContext = () => {
  const context = useContext(SelectOptionContext);
  if (!context) {
    throw new Error('Cannot find SelectOptionContext');
  }
  return context;
};

interface SelectOptionProviderProps {
  children: React.ReactNode;
}

export default function SelectOptionProvider({ children }: SelectOptionProviderProps) {
  const initialState = [
    {
      id: 1,
      stepName: '파워트레인',
      selectedName: null,
      price: 0,
      imgSrc: null,
    },
    {
      id: 2,
      stepName: '구동 방식',
      selectedName: null,
      price: 0,
      imgSrc: null,
    },
    {
      id: 3,
      stepName: '바디 타입',
      selectedName: null,
      price: 0,
      imgSrc: null,
    },
    {
      id: 4,
      stepName: '외장 색상',
      selectedName: null,
      price: 0,
      imgSrc: null,
    },
    {
      id: 5,
      stepName: '내장 색상',
      selectedName: null,
      price: 0,
      imgSrc: null,
    },
    {
      id: 6,
      stepName: '휠 선택',
      selectedName: null,
      price: 0,
      imgSrc: null,
    },
  ];

  const [selectOptionList, setSelectOptionList] = useState<SelectOptionData[]>(initialState);

  const contextValue: SelectOptionContextProps = {
    selectOptionList,
    setSelectOptionList,
  };

  return <SelectOptionContext.Provider value={contextValue}>{children}</SelectOptionContext.Provider>;
}
