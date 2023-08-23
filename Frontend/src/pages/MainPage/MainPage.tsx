import LandingMain from '@/components/main/LandingMain/LandingMain';
import LandingDetail from '@/components/main/LandingMainDetail/LandingMainDetail';
import Layout from '../../components/layout/Layout';
import * as S from './MainPage.style';
import { useEffect } from 'react';
import { useSelfModeContext } from '@/contexts/SelfModeProvider';
import { useSelectPackageDispatch } from '@/contexts/SelectPackageProvider';

export default function MainPage() {
  const { setSelfModeStep } = useSelfModeContext();
  const selectPackageDispatch = useSelectPackageDispatch();
  useEffect(() => {
    sessionStorage.clear();
    setSelfModeStep(1);
    selectPackageDispatch({
      type: 'INIT_LIST',
    });
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
