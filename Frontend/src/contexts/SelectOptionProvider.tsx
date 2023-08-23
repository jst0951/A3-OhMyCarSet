import { DEFAULT_PRICE } from '@/constants';
import { createContext, useContext, useReducer } from 'react';

export type SelectOptionData = {
  id: number;
  stepName: string;
  selectedId: number;
  selectedName: string | null;
  price: number;
  imgSrc: string | null;
  recommendList?: number[];
};

export interface SelectOptionStateT {
  dataList: SelectOptionData[];
  totalPrice: number;
}

type SelectOptionActionT = {
  type: 'UPDATE_LIST' | 'INIT_LIST';
  payload?: {
    optionId: number;
    newOptionData: Partial<SelectOptionData>;
  };
};

const initialState: SelectOptionStateT = {
  dataList: [
    {
      id: 1,
      stepName: '파워트레인',
      selectedId: 0,
      selectedName: null,
      price: 0,
      imgSrc: null,
      recommendList: [],
    },
    {
      id: 2,
      stepName: '구동 방식',
      selectedId: 0,
      selectedName: null,
      price: 0,
      imgSrc: null,
      recommendList: [],
    },
    {
      id: 3,
      stepName: '바디 타입',
      selectedId: 0,
      selectedName: null,
      price: 0,
      imgSrc: null,
      recommendList: [],
    },
    {
      id: 4,
      stepName: '외장 색상',
      selectedId: 0,
      selectedName: null,
      price: 0,
      imgSrc: null,
      recommendList: [],
    },
    {
      id: 5,
      stepName: '내장 색상',
      selectedId: 0,
      selectedName: null,
      price: 0,
      imgSrc: null,
      recommendList: [],
    },
    {
      id: 6,
      stepName: '휠 선택',
      selectedId: 0,
      selectedName: null,
      price: 0,
      imgSrc: null,
      recommendList: [],
    },
  ],
  totalPrice: DEFAULT_PRICE,
};

type SelectOptionDispatchT = (action: SelectOptionActionT) => void;

const selectOptionReducer = (state: SelectOptionStateT, action: SelectOptionActionT): SelectOptionStateT => {
  switch (action.type) {
    case 'UPDATE_LIST': {
      const { optionId, newOptionData } = action.payload ?? {};

      if (optionId === undefined || newOptionData === undefined) return state;

      const updatedDataList = state.dataList.map((option) =>
        option.id === optionId ? { ...option, ...newOptionData } : option
      );

      return {
        dataList: updatedDataList,
        totalPrice: state.totalPrice - state.dataList[optionId - 1].price + (newOptionData?.price || 0),
      };
    }
    case 'INIT_LIST': {
      return {
        dataList: initialState.dataList,
        totalPrice: DEFAULT_PRICE,
      };
    }
    default:
      return state;
  }
};

const SelectOptionStateContext = createContext<SelectOptionStateT | undefined>(undefined);
const SelectOptionDispatchContext = createContext<SelectOptionDispatchT | undefined>(undefined);

export const useSelectOptionState = () => {
  const state = useContext(SelectOptionStateContext);
  if (!state) throw new Error('Cannot find SelectOptionContext');
  return state;
};

export const useSelectOptionDispatch = () => {
  const dispatch = useContext(SelectOptionDispatchContext);
  if (!dispatch) throw new Error('Cannot find SelectOptionContext');
  return dispatch;
};

export const SelectOptionProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(selectOptionReducer, initialState);

  return (
    <SelectOptionStateContext.Provider value={state}>
      <SelectOptionDispatchContext.Provider value={dispatch}>{children}</SelectOptionDispatchContext.Provider>
    </SelectOptionStateContext.Provider>
  );
};
