import Layout from '@/components/layout/Layout';
import * as S from './CompletePage.style';
import CompleteMain from '@/components/complete/CompleteMain/CompleteMain';
import NotFound from '@/components/notFound/NotFound';
import { SelectOptionData, useSelectOptionState } from '@/contexts/SelectOptionProvider';
import CompleteNav from '@/components/complete/CompleteNav/CompleteNav';

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
          <NotFound />
        )}
      </Layout>
    </>
  );
}
