import SelfModeProvider from '@/contexts/SelfModeProvider';
import { createElement } from 'react';
import Router from './routes/Router';
import SelectOptionProvider from './contexts/SelectOptionProvider';
import GuideModeProvider from './contexts/GuideModeProvider';
import SelectTagProvider from './contexts/SelectTagProvide';

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
      <AppProvider contexts={[SelfModeProvider, SelectOptionProvider, GuideModeProvider, SelectTagProvider]}>
        <Router />
      </AppProvider>
    </>
  );
}
