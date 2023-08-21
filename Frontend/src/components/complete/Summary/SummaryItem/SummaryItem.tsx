import { SectionProps } from '@/components/self-mode/SelfModeMain/Estimate/Estimate';
import * as S from './SummaryItem.style';

interface SummaryProps {
  data: SectionProps;
}

export default function SummaryItem({ data }: SummaryProps) {
  const hideStepName = (stepName: string, idx: number) => {
    if (stepName === '선택 옵션' && idx !== 0) return true;
    return false;
  };

  return (
    <>
      <S.Section>
        <S.TitleContainer>
          <S.Title>{data.sectionTitle}</S.Title>
          <S.Price>+ {data.sectionTotal?.toLocaleString()} 원</S.Price>
        </S.TitleContainer>
        <S.MainContainer>
          {data.subList &&
            data.subList.map((sub, index) => (
              <S.Main key={index} $hidden={sub.selectName === null}>
                <S.CategoryName>{!hideStepName(sub.stepName, index) && sub.stepName}</S.CategoryName>
                {sub.selectName !== null && (
                  <S.SelectedContainer>
                    <S.SelectedName>{sub.selectName}</S.SelectedName>
                    <S.OptionPrice>+ {sub.price !== null && sub.price.toLocaleString()} 원</S.OptionPrice>
                  </S.SelectedContainer>
                )}
              </S.Main>
            ))}
        </S.MainContainer>
      </S.Section>
    </>
  );
}
