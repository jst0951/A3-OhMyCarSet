import Layout from '@/components/layout/Layout';
import * as S from './CompletePage.style';
import CompleteMain from '@/components/complete/CompleteMain/CompleteMain';
import CompleteNav from '@/components/complete/CompleteNav/CompleteNav';
import Error from '@/components/complete/Error/Error';
import { SelectOptionData, useSelectOptionState } from '@/contexts/SelectOptionProvider';

export default function CompletePage() {
  const selectOptionState = useSelectOptionState();
  let contextExist = true;

  selectOptionState.dataList.map((data: SelectOptionData) => {
    if (data.selectedId === 0) {
      contextExist = false;
    }
  });

  return (
    <>
      <Layout>
        {'myPalisade' in sessionStorage || contextExist ? (
          <S.CompleteContainer>
            <CompleteNav />
            <CompleteMain />
          </S.CompleteContainer>
        ) : (
          <Error />
        )}
      </Layout>
    </>
  );
}
