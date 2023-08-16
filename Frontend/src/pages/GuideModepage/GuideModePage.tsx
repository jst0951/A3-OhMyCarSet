import Layout from '@/components/layout/Layout';
import * as S from './GuideModePage.style';
import GuideModeMain from '../../components/guide-mode/GuideMain/GuideMain';

export default function GuideModePage() {
  return (
    <>
      <Layout>
        <S.GuideModeContainer>
          <GuideModeMain />
        </S.GuideModeContainer>
      </Layout>
    </>
  );
}
