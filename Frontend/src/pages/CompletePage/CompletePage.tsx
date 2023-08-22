import Layout from '@/components/layout/Layout';
import * as S from './CompletePage.style';
import CompleteMain from '@/components/complete/CompleteMain/CompleteMain';
import CompleteNav from '@/components/complete/CompleteNav/CompleteNav';
import ErrorPage from '@/components/complete/ErrorPage/ErrorPage';
import { SelectOptionData, useSelectOptionState } from '@/contexts/SelectOptionProvider';

export default function CompletePage() {
  const selectOptionState = useSelectOptionState();
  let contextExist = true;

  selectOptionState.dataList.map((data: SelectOptionData) => {
    if (data.selectedId === 0) {
      contextExist = false;
    }
  });

  return 'myPalisade' in sessionStorage || contextExist ? (
    <>
      <Layout>
        <S.CompleteContainer>
          <CompleteNav />
          <CompleteMain />
        </S.CompleteContainer>
      </Layout>
    </>
  ) : (
    <Layout>
      <ErrorPage />
    </Layout>
  );
}
