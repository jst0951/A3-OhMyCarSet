import LandingMain from '@/components/main/LandingMain/LandingMain';
import LandingDetail from '@/components/main/LandingMainDetail/LandingMainDetail';
import Layout from '../../components/layout/Layout';
import * as S from './MainPage.style';
import { useEffect } from 'react';
import { useSelfModeContext } from '@/contexts/SelfModeProvider';

export default function MainPage() {
  const { setSelfModeStep } = useSelfModeContext();
  useEffect(() => {
    setSelfModeStep(1);
  }, []);

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
