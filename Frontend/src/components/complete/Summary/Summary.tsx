import * as S from './Summary.style';
import { useSelectOptionState } from '@/contexts/SelectOptionProvider';
import { DEFAULT_PRICE } from '@/constants';
import SummaryItem from './SummaryItem/SummaryItem';
import { SectionProps } from '@/components/self-mode/SelfModeMain/Estimate/Estimate';

export default function Summary() {
  const selectOptionState = useSelectOptionState();

  const sectionList: SectionProps[] = [
    {
      sectionTitle: '팰리세이드 Le Blanc (르블랑)',
      sectionTotal: DEFAULT_PRICE,
      subList: [0, 1, 2, 5].map((idx) => ({
        stepName: selectOptionState.dataList[idx].stepName,
        selectName: selectOptionState.dataList[idx].selectedName,
        price: selectOptionState.dataList[idx].price,
      })),
    },
    {
      sectionTitle: '색상',
      sectionTotal: (selectOptionState.dataList[3]?.price ?? 0) + (selectOptionState.dataList[4]?.price ?? 0),
      subList: [3, 4].map((idx) => ({
        stepName: selectOptionState.dataList[idx].stepName,
        selectName: selectOptionState.dataList[idx].selectedName,
        price: selectOptionState.dataList[idx].price,
      })),
    },
  ];

  return (
    <>
      <S.MainContainer>
        <S.TitleContainer>
          <S.Title>견적 요약</S.Title>
          <S.leftTitle>
            <S.subTitle>차량 총 견적 금액</S.subTitle>
            <S.TotalPrice>{selectOptionState.totalPrice.toLocaleString()}원</S.TotalPrice>
          </S.leftTitle>
        </S.TitleContainer>
        <S.SectionContainer>
          {sectionList.map((data) => (
            <SummaryItem key={data.sectionTitle} data={data} />
          ))}
        </S.SectionContainer>
      </S.MainContainer>
    </>
  );
}
