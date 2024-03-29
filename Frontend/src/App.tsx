import SelfModeProvider from '@/contexts/SelfModeProvider';
import { createElement } from 'react';
import Router from './routes/Router';
import { SelectOptionProvider } from './contexts/SelectOptionProvider';
import { CurrentPackageProvider } from './contexts/CurrentPackageProvider';
import { SelectPackageProvider } from './contexts/SelectPackageProvider';
import WaitingProvider from './contexts/WaitingProvider';
import { CarDictProvider } from './contexts/CarDictProvider';
import SelectTagProvider from './contexts/SelectTagProvide';
import { ModalProvider } from './contexts/ModalProvider';

interface AppProviderProps {
  contexts: React.ElementType[];
  children: React.ReactNode;
}

export default function App() {
  const AppProvider = ({ contexts, children }: AppProviderProps) =>
    contexts.reduce(
      (prev: React.ReactNode, context: React.ElementType) =>
        createElement(context, {
          children: prev,
        }),
      children
    );
  return (
    <>
      <AppProvider
        contexts={[
          SelfModeProvider,
          SelectOptionProvider,
          SelectTagProvider,
          CurrentPackageProvider,
          SelectPackageProvider,
          CarDictProvider,
          WaitingProvider,
          ModalProvider,
        ]}
      >
        <Router />
      </AppProvider>
    </>
  );
}
