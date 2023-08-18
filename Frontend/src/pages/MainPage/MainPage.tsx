import LandingMain from '@/components/main/LandingMain/LandingMain';
import LandingDetail from '@/components/main/LandingMainDetail/LandingMainDetail';
import Layout from '../../components/layout/Layout';
import * as S from './MainPage.style';

export default function MainPage() {
  return (
    <>
      <Layout>
        <S.MainPageContainer>
          <LandingMain />
          <LandingDetail />
        </S.MainPageContainer>
      </Layout>
    </>
  );
}
