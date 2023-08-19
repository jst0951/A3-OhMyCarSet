import { createContext, useContext, useReducer } from 'react';

interface CurrentPackageStateT {
  filterId: number;
  packageId: number;
  optionId: number;
}

type CurrentPackageActionT = {
  type: 'UPDATE_FILTER' | 'UPDATE_PACKAGE' | 'UPDATE_OPTION';
  payload: number;
};

const initialState: CurrentPackageStateT = {
  filterId: 1,
  packageId: 0,
  optionId: 0,
};

type CurrentPackageDispatchT = (action: CurrentPackageActionT) => void;

const currentPackageReducer = (state: CurrentPackageStateT, action: CurrentPackageActionT): CurrentPackageStateT => {
  switch (action.type) {
    case 'UPDATE_FILTER':
      return {
        filterId: action.payload,
        packageId: 0,
        optionId: 0,
      };
    case 'UPDATE_PACKAGE':
      return {
        ...state,
        packageId: action.payload,
      };
    case 'UPDATE_OPTION':
      return {
        ...state,
        optionId: action.payload,
      };
    default:
      return state;
  }
};
const CurrentPackageStateContext = createContext<CurrentPackageStateT | undefined>(undefined);
const CurrentPackageDispatchContext = createContext<CurrentPackageDispatchT | undefined>(undefined);

export const useCurrentPackageState = () => {
  const state = useContext(CurrentPackageStateContext);
  if (!state) throw new Error('Cannot find CurrentPackageContext');
  return state;
};

export const useCurrentPackageDispatch = () => {
  const dispatch = useContext(CurrentPackageDispatchContext);
  if (!dispatch) throw new Error('Cannot find CurrentPackageContext');
  return dispatch;
};

export const CurrentPackageProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(currentPackageReducer, initialState);

  return (
    <CurrentPackageStateContext.Provider value={state}>
      <CurrentPackageDispatchContext.Provider value={dispatch}>{children}</CurrentPackageDispatchContext.Provider>
    </CurrentPackageStateContext.Provider>
  );
};
