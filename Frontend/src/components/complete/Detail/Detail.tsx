import * as S from './Detail.style';
import { useSelectOptionState } from '@/contexts/SelectOptionProvider';
import completeCarData from '@/asset/data/completeCarData.json';
import DetailItem from './DetailItem/DetailItem';
import { OptionDataT } from '@/components/self-mode/SelfModeMain/SelfModeMain';

export default function Detail() {
  const selectOptionState = useSelectOptionState();

  return (
    <>
      <S.MainContainer>
        <S.TitleContainer>
          <S.Title>견적 자세히 보기</S.Title>
          <S.RightTitle>
            <S.SubTitle>차량 총 견적 금액</S.SubTitle>
            <S.TotalPrice>{selectOptionState.totalPrice.toLocaleString()} 원</S.TotalPrice>
          </S.RightTitle>
        </S.TitleContainer>
        <S.SectionContainer>
          {completeCarData.map((data: OptionDataT, index) => (
            <DetailItem key={data.id} data={data} index={index} />
          ))}
        </S.SectionContainer>
      </S.MainContainer>
    </>
  );
}
