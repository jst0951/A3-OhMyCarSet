import { createContext, useContext, useReducer } from 'react';

type SelectOptionData = {
  id: number;
  name: string;
  price: number;
  imgSrc: string;
};

export type SelectPackageData = {
  filterId: number;
  filterName: string;
  selectedList: Map<number, SelectOptionData>;
  recommendList?: number[];
};

interface SelectPackageStateT {
  packageList: SelectPackageData[];
  totalCount: number;
  totalPrice: number;
}

type SelectPackageActionT = {
  type: 'UPDATE_LIST' | 'INIT_LIST';
  payload?: {
    filterId: number;
    newData: SelectOptionData;
    recommendId?: number;
  };
};

const initialState: SelectPackageStateT = {
  packageList: [
    {
      filterId: 1,
      filterName: '시스템',
      selectedList: new Map(),
      recommendList: [],
    },
    {
      filterId: 2,
      filterName: '온도관리',
      selectedList: new Map(),
      recommendList: [],
    },
    {
      filterId: 3,
      filterName: '외부장치',
      selectedList: new Map(),
      recommendList: [],
    },
    {
      filterId: 4,
      filterName: '내부장치',
      selectedList: new Map(),
      recommendList: [],
    },
  ],
  totalCount: 0,
  totalPrice: 0,
};

type SelectPackageDispatchT = (action: SelectPackageActionT) => void;

const selectPackageReducer = (state: SelectPackageStateT, action: SelectPackageActionT): SelectPackageStateT => {
  switch (action.type) {
    case 'UPDATE_LIST': {
      const { filterId, newData, recommendId } = action.payload ?? {};

      if (filterId === undefined || newData === undefined) return state;

      const updatedPackageList = state.packageList.map((data) => {
        if (data.filterId === filterId) {
          const updatedMap = new Map(data.selectedList);

          if (updatedMap.has(newData.id)) {
            updatedMap.delete(newData.id);
          } else {
            updatedMap.set(newData.id, newData);
          }

          if (recommendId === undefined) return { ...data, selectedList: updatedMap };

          let newRecommend = data.recommendList;

          if (newRecommend === undefined) {
            newRecommend = [recommendId];
          } else {
            newRecommend.push(recommendId);
          }

          return { ...data, selectedList: updatedMap, recommendList: newRecommend };
        }
        return data;
      });

      const existingOption = state.packageList[filterId - 1].selectedList.get(newData.id);
      console.log(state);
      return {
        packageList: updatedPackageList,
        totalCount: state.totalCount + (existingOption ? -1 : 1),
        totalPrice: state.totalPrice + (existingOption ? existingOption.price * -1 : newData.price),
      };
    }
    default:
      return state;
  }
};

const SelectPackageStateContext = createContext<SelectPackageStateT | undefined>(undefined);
const SelectPackageDispatchContext = createContext<SelectPackageDispatchT | undefined>(undefined);

export const useSelectPackageState = () => {
  const state = useContext(SelectPackageStateContext);
  if (!state) throw new Error('Cannot find SelectPackageContext');
  return state;
};

export const useSelectPackageDispatch = () => {
  const dispatch = useContext(SelectPackageDispatchContext);
  if (!dispatch) throw new Error('Cannot find SelectPackageContext');
  return dispatch;
};

export const SelectPackageProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(selectPackageReducer, initialState);

  return (
    <SelectPackageStateContext.Provider value={state}>
      <SelectPackageDispatchContext.Provider value={dispatch}>{children}</SelectPackageDispatchContext.Provider>
    </SelectPackageStateContext.Provider>
  );
};
