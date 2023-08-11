import Layout from '@/components/layout/Layout';
import * as S from './CompletePage.style';
import CompleteMain from '@/components/complete/CompleteMain/CompleteMain';

export default function CompletePage() {
  return (
    <>
      <Layout>
        <S.CompleteContainer>
          <CompleteMain />
        </S.CompleteContainer>
      </Layout>
    </>
  );
}
