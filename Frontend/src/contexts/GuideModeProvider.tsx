import { createContext, useContext, useState } from 'react';

interface GuideModeContextProps {
  GuideModeStep: number;
  setGuideModeStep: React.Dispatch<React.SetStateAction<number>>;
}

const GuideModeContext = createContext<GuideModeContextProps | undefined>(undefined);

export const useGuideModeContext = () => {
  const context = useContext(GuideModeContext);
  if (!context) {
    throw new Error('Cannot find GuideModeProvider');
  }
  return context;
};

interface GuideModeProviderProps {
  children: React.ReactNode;
}

export default function GuideModeProvider({ children }: GuideModeProviderProps) {
  const [GuideModeStep, setGuideModeStep] = useState<number>(1);

  const contextValue: GuideModeContextProps = {
    GuideModeStep,
    setGuideModeStep,
  };

  return <GuideModeContext.Provider value={contextValue}>{children}</GuideModeContext.Provider>;
}
