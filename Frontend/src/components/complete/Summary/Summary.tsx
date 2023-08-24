import * as S from './Summary.style';
import { DEFAULT_PRICE } from '@/constants';
import SummaryItem from './SummaryItem/SummaryItem';
import { SectionProps } from '@/components/self-mode/SelfModeMain/Estimate/Estimate';
import { SelectOptionStateT } from '@/contexts/SelectOptionProvider';

interface SelectPackageStateT {
  sectionTitle: string;
  totalPrice: number;
  subList: Array<
    Array<{
      id: number;
      name: string;
      price: number;
      imgSrc: string | null;
    }>
  >;
}

export default function Summary() {
  const myPalisadeValue = JSON.parse(sessionStorage.getItem('myPalisade') || '');
  const selectOptionState: SelectOptionStateT = myPalisadeValue.single;
  const selectPackageState: SelectPackageStateT = myPalisadeValue.multi;
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
      subList: selectPackageState.subList
        .map((subItem) =>
          subItem.map((item) => ({
            stepName: '선택 옵션',
            selectName: item.name,
            price: item.price,
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
