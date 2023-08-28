import Layout from '@/components/layout/Layout';
import * as S from './GuideModePage.style';
import GuideMain from '../../components/guide-mode/GuideMain/GuideMain';
import { useWaitingContext } from '@/contexts/WaitingProvider';

export default function GuideModePage() {
  const { waiting } = useWaitingContext();

  return (
    <>
      <Layout>
        <S.GuideModeContainer $block={waiting}>
          <GuideMain />
        </S.GuideModeContainer>
      </Layout>
    </>
  );
}
