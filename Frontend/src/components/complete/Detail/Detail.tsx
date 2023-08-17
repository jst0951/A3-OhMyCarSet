import * as S from './Detail.style';
import { useSelectOptionState } from '@/contexts/SelectOptionProvider';
import DetailItem from './DetailItem/DetailItem';
import { useSelectPackageState } from '@/contexts/SelectPackageProvider';
import DetailMultiItem from './DetailMultiItem/DetailMultiItem';

export default function Detail() {
  const selectOptionState = useSelectOptionState();
  const selectPackageState = useSelectPackageState();
  const tempTotal = selectOptionState.totalPrice + selectPackageState.totalPrice;

  return (
    <>
      <S.MainContainer>
        <S.TitleContainer>
          <S.Title>견적 자세히 보기</S.Title>
          <S.RightTitle>
            <S.SubTitle>차량 총 견적 금액</S.SubTitle>
            <S.TotalPrice>{tempTotal.toLocaleString()} 원</S.TotalPrice>
          </S.RightTitle>
        </S.TitleContainer>
        <S.SectionContainer>
          {selectOptionState.dataList.map((data, index) => (
            <DetailItem key={data.id} data={data} index={index} />
          ))}
          <DetailMultiItem />
        </S.SectionContainer>
      </S.MainContainer>
    </>
  );
}
