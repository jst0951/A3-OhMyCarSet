import { createContext, useContext, useState } from 'react';

interface WaitingContextProps {
  waiting: boolean;
  setWaiting: React.Dispatch<React.SetStateAction<boolean>>;
}

const WaitingContext = createContext<WaitingContextProps | undefined>(undefined);

export const useWaitingContext = () => {
  const context = useContext(WaitingContext);
  if (!context) {
    throw new Error('Cannot find WaitingProvider');
  }
  return context;
};

interface WaitingProviderProps {
  children: React.ReactNode;
}

export default function WaitingProvider({ children }: WaitingProviderProps) {
  const [waiting, setWaiting] = useState(false);

  const contextValue: WaitingContextProps = {
    waiting,
    setWaiting,
  };

  return <WaitingContext.Provider value={contextValue}>{children}</WaitingContext.Provider>;
}
