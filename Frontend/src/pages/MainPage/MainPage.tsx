import LandingMain from '@/components/main/LandingMain/LandingMain';
import LandingDetail from '@/components/main/LandingMainDetail/LandingMainDetail';
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
