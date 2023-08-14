import Layout from '@/components/layout/Layout';
import * as S from './SelfModePage.style';
import SelfModeNav from '@/components/self-mode/SelfModeNav/SelfModeNav';
import SelfModeMain from '@/components/self-mode/SelfModeMain/SelfModeMain';

export default function SelfModePage() {
  return (
    <>
      <Layout>
        <S.SelfModeContainer>
          <SelfModeNav />
          <SelfModeMain />
        </S.SelfModeContainer>
      </Layout>
    </>
  );
}
