import Icon from '@/components/common/Icon';
import * as S from './Estimate.style';
import { useSelectOptionState } from '@/contexts/SelectOptionProvider';
import EstimateSection from './EstimateSection/EstimateSection';
import { DEFAULT_PRICE } from '@/constants';
import { useSelectPackageState } from '@/contexts/SelectPackageProvider';

interface EstimateProps {
  onClick: () => void;
  tempTotal: number;
}

export interface SectionProps {
  sectionTitle: string;
  sectionTotal: number;
  subList: Array<{
    stepName: string;
    selectName: string | null;
    price: number;
  }>;
}

export default function Estimate({ onClick, tempTotal }: EstimateProps) {
  const selectOptionState = useSelectOptionState();
  const selectPackageState = useSelectPackageState();

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
    // {
    //   sectionTitle: '휠',
    //   sectionTotal: selectOptionState.dataList[5]?.price ?? 0,
    //   subList: [5].map((idx) => {
    //     const data = selectOptionState.dataList[idx];
    //     return { stepName: data.stepName, selectName: data.selectedName, price: data.price };
    //   }),
    // },
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
      <S.EstimateContainer onClick={onClick}>
        <S.CloseContainer>
          <Icon icon="CloseIcon" />
        </S.CloseContainer>
        <S.MainContainer>
          <S.TitleContainer>
            <S.Title>견적 요약</S.Title>
            <S.TotalPrice>{tempTotal.toLocaleString()}원</S.TotalPrice>
          </S.TitleContainer>
          <S.SectionContainer>
            {sectionList.map((data, index) => (
              <EstimateSection key={index} data={data} />
            ))}
          </S.SectionContainer>
        </S.MainContainer>
      </S.EstimateContainer>
    </>
  );
}
