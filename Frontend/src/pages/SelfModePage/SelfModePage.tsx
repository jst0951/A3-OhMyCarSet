import Layout from '@/components/layout/Layout';
import * as Style from './SelfModePage.style';
import SelfModeNav from '@/components/self-mode/SelfModeNav/SelfModeNav';

export default function SelfModePage() {
  return (
    <>
      <Layout>
        <Style.SelfModeContainer>
          <SelfModeNav />
        </Style.SelfModeContainer>
      </Layout>
    </>
  );
}
