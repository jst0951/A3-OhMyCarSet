import { createContext, useContext, useReducer } from 'react';

export type DescriptionItem = {
  optionId: number;
  optionName: string;
  description: string;
  imgSrc: string;
};

interface ModalStateT {
  activeModal: string | null;
  isOpen: boolean;
  item?: DescriptionItem;
}

type ModalActionT = {
  type:
    | 'GO_MAIN'
    | 'CHANGE_MODEL'
    | 'CHANGE_MODE'
    | 'CHANGE_TO_SELF'
    | 'CHANGE_TO_GUIDE'
    | 'DEFAULT_OPTION'
    | 'DESCRIPT_OPTION'
    | 'CLOSE_MODAL';
  payload?: DescriptionItem;
};

const initialState: ModalStateT = {
  activeModal: null,
  isOpen: false,
};

type ModalDispatchT = (action: ModalActionT) => void;

const modalReducer = (state: ModalStateT, action: ModalActionT): ModalStateT => {
  switch (action.type) {
    case 'GO_MAIN':
      return {
        activeModal: 'main',
        isOpen: true,
      };
    case 'CHANGE_MODEL':
      return {
        activeModal: 'model',
        isOpen: true,
      };
    case 'CHANGE_MODE':
      return {
        activeModal: 'mode',
        isOpen: true,
      };
    case 'CHANGE_TO_SELF':
      return {
        activeModal: 'toSelf',
        isOpen: true,
      };
    case 'CHANGE_TO_GUIDE':
      return {
        activeModal: 'toGuide',
        isOpen: true,
      };
    case 'DESCRIPT_OPTION':
      return {
        activeModal: 'description',
        isOpen: true,
        item: action.payload,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};
const ModalStateContext = createContext<ModalStateT | undefined>(undefined);
const ModalDispatchContext = createContext<ModalDispatchT | undefined>(undefined);

export const useModalState = () => {
  const state = useContext(ModalStateContext);
  if (!state) throw new Error('Cannot find ModalContext');
  return state;
};

export const useModalDispatch = () => {
  const dispatch = useContext(ModalDispatchContext);
  if (!dispatch) throw new Error('Cannot find ModalContext');
  return dispatch;
};

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  return (
    <ModalStateContext.Provider value={state}>
      <ModalDispatchContext.Provider value={dispatch}>{children}</ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
};
