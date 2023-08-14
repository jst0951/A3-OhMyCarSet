import * as S from './Detail.style';
import { useSelectOptionState } from '@/contexts/SelectOptionProvider';
import completeCarData from '@/asset/data/completeCarData.json';
import DetailItem from './DetailItem/DetailItem';

export interface OptionProps {
  id: number;
  name: string;
  mainDescription?: string;
  subDescription?: string | null;
  mainFeedback: string;
  subFeedback: string;
  price: number;
  imgSrc: string;
  iconSrc?: string | null;
}

export default function Detail() {
  const selectOptionState = useSelectOptionState();
  console.log(typeof completeCarData);
  return (
    <>
      <S.MainContainer>
        <S.TitleContainer>
          <S.Title>견적 자세히 보기</S.Title>
          <S.LeftTitle>
            <S.SubTitle>차량 총 견적 금액</S.SubTitle>
            <S.TotalPrice>{selectOptionState.totalPrice.toLocaleString()}원</S.TotalPrice>
          </S.LeftTitle>
        </S.TitleContainer>
        <S.SectionContainer>
          {completeCarData.map((data, index) => (
            <DetailItem key={data.id} data={data} index={index} />
          ))}
        </S.SectionContainer>
      </S.MainContainer>
    </>
  );
}
