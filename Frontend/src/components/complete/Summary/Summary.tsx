import * as S from './Summary.style';
import { useSelectOptionState } from '@/contexts/SelectOptionProvider';
import { DEFAULT_PRICE } from '@/constants';
import SummaryItem from './SummaryItem/SummaryItem';
import { SectionProps } from '@/components/self-mode/SelfModeMain/Estimate/Estimate';
import { useSelectPackageState } from '@/contexts/SelectPackageProvider';

export default function Summary() {
  const selectOptionState = useSelectOptionState();
  const selectPackageState = useSelectPackageState();
  const tempTotal = selectOptionState.totalPrice + selectPackageState.totalPrice;

  const sectionList: SectionProps[] = [
    {
      sectionTitle: '팰리세이드 Le Blanc (르블랑)',
      sectionTotal: DEFAULT_PRICE,
      subList: [0, 1, 2].map((idx) => {
        const data = selectOptionState.dataList[idx];
        return { stepName: data.stepName, selectName: data.selectedName, price: data.price };
      }),
    },
    {
      sectionTitle: '색상',
      sectionTotal: (selectOptionState.dataList[3]?.price ?? 0) + (selectOptionState.dataList[4]?.price ?? 0),
      subList: [3, 4].map((idx) => {
        const data = selectOptionState.dataList[idx];
        return { stepName: data.stepName, selectName: data.selectedName, price: data.price };
      }),
    },
    {
      sectionTitle: '휠',
      sectionTotal: selectOptionState.dataList[5]?.price ?? 0,
      subList: [5].map((idx) => {
        const data = selectOptionState.dataList[idx];
        return { stepName: data.stepName, selectName: data.selectedName, price: data.price };
      }),
    },
    {
      sectionTitle: '옵션',
      sectionTotal: selectPackageState.totalPrice,
      subList: Array.from(selectPackageState.packageList)
        .map((packageData) =>
          Array.from(packageData.selectedList.values()).map((optionData) => ({
            stepName: '선택 옵션',
            selectName: optionData.name,
            price: optionData.price,
          }))
        )
        .flat(),
    },
  ];

  return (
    <>
      <S.MainContainer>
        <S.TitleContainer>
          <S.Title>견적 요약</S.Title>
          <S.rightTitle>
            <S.subTitle>차량 총 견적 금액</S.subTitle>
            <S.TotalPrice>{tempTotal.toLocaleString()} 원</S.TotalPrice>
          </S.rightTitle>
        </S.TitleContainer>
        <S.SectionContainer>
          {sectionList.map((data, index) => (
            <SummaryItem key={index} data={data} />
          ))}
        </S.SectionContainer>
      </S.MainContainer>
    </>
  );
}
