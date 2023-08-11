import Layout from '@/components/layout/Layout';
import * as Style from './GuideModePage.style';
import GuideModeMain from '../../components/guide-mode/GuideModeMain/GuideModeMain';

export default function GuideModePage() {
  return (
    <>
      <Layout>
        <Style.GuideModeContainer>
          <GuideModeMain />
        </Style.GuideModeContainer>
      </Layout>
    </>
  );
}
