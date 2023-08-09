import Layout from '@/components/layout/Layout';
import * as Style from './SelfModePage.style';
import SelfModeNav from '@/components/self-mode/SelfModeNav/SelfModeNav';
import SelfModeMain from '@/components/self-mode/SelfModeMain/SelfModeMain';

export default function SelfModePage() {
  return (
    <>
      <Layout>
        <Style.SelfModeContainer>
          <SelfModeNav />
          <SelfModeMain />
        </Style.SelfModeContainer>
      </Layout>
    </>
  );
}
