import LandingMain from '@/components/main/LandingMain/LandingMain';
import LandingDetail from '@/components/main/LandingMainDetail/LandingDetail';
import Layout from '../../components/layout/Layout';
import * as Style from './MainPage.style';

export default function MainPage() {
  return (
    <>
      <Layout>
        <Style.MainPageContainer>
          <LandingMain />
          <LandingDetail />
        </Style.MainPageContainer>
      </Layout>
    </>
  );
}
