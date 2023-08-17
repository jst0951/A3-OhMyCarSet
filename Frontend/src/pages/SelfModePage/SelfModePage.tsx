import Layout from '@/components/layout/Layout';
import * as S from './SelfModePage.style';
import SelfModeNav from '@/components/self-mode/SelfModeNav/SelfModeNav';
import SelfModeMain from '@/components/self-mode/SelfModeMain/SelfModeMain';
import { useWaitingContext } from '@/contexts/WaitingProvider';

export default function SelfModePage() {
  const { waiting } = useWaitingContext();

  return (
    <>
      <Layout>
        <S.SelfModeContainer $block={waiting}>
          <SelfModeNav />
          <SelfModeMain />
        </S.SelfModeContainer>
      </Layout>
    </>
  );
}
