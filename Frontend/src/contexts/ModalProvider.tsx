import { createContext, useContext, useState } from 'react';

interface ModalContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('Cannot find ModalProvider');
  }
  return context;
};

interface ModalProviderProps {
  children: React.ReactNode;
}

export default function ModalProvider({ children }: ModalProviderProps) {
  const [open, setOpen] = useState(false);

  const contextValue: ModalContextProps = {
    open,
    setOpen,
  };

  return <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>;
}
