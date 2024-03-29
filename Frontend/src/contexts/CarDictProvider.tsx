import fetchData from '@/utils/apis/fetchData';
import { createContext, useContext, useEffect, useReducer } from 'react';

type CarDictDataT = {
  id: number;
  keyword: string;
  description: string;
  imgSrc: string | null;
};

interface CarDictStateT {
  dataList: CarDictDataT[];
  clickedData: CarDictDataT | null;
  isOpen: boolean;
  dictionaryOn: boolean;
  isInit: boolean;
  introModal: boolean;
}

type CarDictActionT = {
  type: 'INIT_LIST' | 'CLICK_WORD' | 'CLOSE_MODAL' | 'TOGGLE_DICT' | 'INTRO_MODAL' | 'CLOSE_INTRO';
  payload?: {
    dataList?: CarDictDataT[];
    keyword?: string;
  };
};

const initialState: CarDictStateT = {
  dataList: [],
  clickedData: null,
  isOpen: false,
  dictionaryOn: false,
  isInit: true,
  introModal: false,
};

type CarDictDispatchT = (action: CarDictActionT) => void;

const carDictReducer = (state: CarDictStateT, action: CarDictActionT): CarDictStateT => {
  switch (action.type) {
    case 'INIT_LIST': {
      const newDataList = action.payload?.dataList ?? [];
      return {
        ...state,
        dataList: newDataList,
      };
    }
    case 'CLICK_WORD': {
      const clickedData = state.dataList.find((item) => item.keyword === action.payload?.keyword) || null;

      return {
        ...state,
        clickedData: clickedData,
        isOpen: true,
      };
    }
    case 'CLOSE_MODAL':
      return {
        ...state,
        isOpen: false,
      };
    case 'TOGGLE_DICT':
      return {
        ...state,
        dictionaryOn: !state.dictionaryOn,
      };
    case 'INTRO_MODAL':
      return {
        ...state,
        introModal: true,
      };

    case 'CLOSE_INTRO':
      return {
        ...state,
        isInit: false,
        introModal: false,
      };
    default:
      return state;
  }
};

const CarDictStateContext = createContext<CarDictStateT | undefined>(undefined);
const CarDictDispatchContext = createContext<CarDictDispatchT | undefined>(undefined);

export const useCarDictState = () => {
  const state = useContext(CarDictStateContext);
  if (!state) throw new Error('Cannot find CarDictContext');
  return state;
};

export const useCarDictDispatch = () => {
  const dispatch = useContext(CarDictDispatchContext);
  if (!dispatch) throw new Error('Cannot find CarDictContext');
  return dispatch;
};

export const CarDictProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(carDictReducer, initialState);

  const fetchCarDict = async () => {
    try {
      const response = await fetchData('car_dict');
      dispatch({ type: 'INIT_LIST', payload: { dataList: response } });
    } catch (error) {
      console.error('Error fetching car dictionary data:', error);
    }
  };

  useEffect(() => {
    fetchCarDict();
  }, []);

  return (
    <CarDictStateContext.Provider value={state}>
      <CarDictDispatchContext.Provider value={dispatch}>{children}</CarDictDispatchContext.Provider>
    </CarDictStateContext.Provider>
  );
};
