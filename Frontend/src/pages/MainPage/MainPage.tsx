import LandingMain from '@/components/main/LandingMain/LandingMain';
import Layout from '../../components/layout/Layout';
import * as Style from './MainPage.style';

export default function MainPage() {
  return (
    <>
      <Layout>
        <Style.MainPageContainer>
          <LandingMain />
        </Style.MainPageContainer>
      </Layout>
    </>
  );
}
