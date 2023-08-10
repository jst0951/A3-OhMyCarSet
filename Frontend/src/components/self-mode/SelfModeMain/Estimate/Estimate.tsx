import Icon from '@/components/common/Icon';
import * as S from './Estimate.style';
import { useSelectOptionState } from '@/contexts/SelectOptionProvider';
import EstimateSection from './EstimateSection/EstimateSection';
import { DEFAULT_PRICE } from '@/constants';

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
            {sectionList.map((data) => (
              <EstimateSection key={data.sectionTitle} data={data} />
            ))}
          </S.SectionContainer>
        </S.MainContainer>
      </S.EstimateContainer>
    </>
  );
}
