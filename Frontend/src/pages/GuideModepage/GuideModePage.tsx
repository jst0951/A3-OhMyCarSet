import Layout from '@/components/layout/Layout';
import * as S from './GuideModePage.style';
import GuideMain from '../../components/guide-mode/GuideMain/GuideMain';

export default function GuideModePage() {
  return (
    <>
      <Layout>
        <S.GuideModeContainer>
          <GuideMain />
        </S.GuideModeContainer>
      </Layout>
    </>
  );
}
