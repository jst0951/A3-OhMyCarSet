import Layout from '@/components/layout/Layout';
import * as S from './CompletePage.style';
import CompleteMain from '@/components/complete/CompleteMain/CompleteMain';
import CompleteNav from '@/components/complete/CompleteNav/CompleteNav';

export default function CompletePage() {
  return (
    <>
      <Layout>
        <S.CompleteContainer>
          <CompleteNav />
          <CompleteMain />
        </S.CompleteContainer>
      </Layout>
    </>
  );
}
