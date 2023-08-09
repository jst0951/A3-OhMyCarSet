import { createContext, useContext, useState } from 'react';

interface SelfModeContextProps {
  selfModeStep: number;
  setSelfModeStep: React.Dispatch<React.SetStateAction<number>>;
}

const SelfModeContext = createContext<SelfModeContextProps | undefined>(undefined);

export const useSelfModeContext = () => {
  const context = useContext(SelfModeContext);
  if (!context) {
    throw new Error('Cannot find SelfModeProvider');
  }
  return context;
};

interface SelfModeProviderProps {
  children: React.ReactNode;
}

export default function SelfModeProvider({ children }: SelfModeProviderProps) {
  const [selfModeStep, setSelfModeStep] = useState<number>(1);

  const contextValue: SelfModeContextProps = {
    selfModeStep,
    setSelfModeStep,
  };

  return <SelfModeContext.Provider value={contextValue}>{children}</SelfModeContext.Provider>;
}
