import { DEFAULT_PRICE } from '@/constants';
import { createContext, useContext, useReducer } from 'react';

export type SelectOptionData = {
  id: number;
  stepName: string;
  selectedName: string | null;
  price: number;
  imgSrc: string | null;
};

interface SelectOptionStateT {
  dataList: SelectOptionData[];
  totalPrice: number;
}

type SelectOptionActionT = {
  type: 'UPDATE_LIST';
  payload: {
    optionId?: number;
    newOptionData?: Partial<SelectOptionData>;
  };
};

const initialState: SelectOptionStateT = {
  dataList: [
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
  ],
  totalPrice: DEFAULT_PRICE,
};

type SelectOptionDispatchT = (action: SelectOptionActionT) => void;

const selectOptionReducer = (state: SelectOptionStateT, action: SelectOptionActionT): SelectOptionStateT => {
  switch (action.type) {
    case 'UPDATE_LIST': {
      const { optionId, newOptionData } = action.payload;

      const updatedDataList = state.dataList.map((option) =>
        option.id === optionId ? { ...option, ...newOptionData } : option
      );

      return {
        totalPrice: state.totalPrice + (newOptionData?.price || 0),
        dataList: updatedDataList,
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
