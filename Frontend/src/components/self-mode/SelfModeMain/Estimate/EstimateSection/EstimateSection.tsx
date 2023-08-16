import { SectionProps } from '../Estimate';
import * as S from './EstimateSection.style';

interface EstimateSectionProps {
  data: SectionProps;
}

export default function EstimateSection({ data }: EstimateSectionProps) {
  const hideStepName = (stepName: string, idx: number) => {
    if (stepName === '선택 옵션' && idx !== 0) return true;
    return false;
  };
  return (
    <>
      <S.Section>
        <S.SectionTitleContainer>
          <S.SectionTitle>{data.sectionTitle}</S.SectionTitle>
          <S.Price>+ {data.sectionTotal?.toLocaleString()}원</S.Price>
        </S.SectionTitleContainer>
        <S.SectionMainContainer>
          {data.subList &&
            data.subList.map((sub, idx) => (
              <S.SectionMain key={idx} $hidden={sub.selectName === null}>
                <S.CategoryName>{!hideStepName(sub.stepName, idx) && sub.stepName}</S.CategoryName>
                {sub.selectName !== null && (
                  <S.SelectedContainer>
                    <S.SelectedName>{sub.selectName}</S.SelectedName>
                    <S.OptionPrice>+ {sub.price !== null && sub.price.toLocaleString()} 원</S.OptionPrice>
                  </S.SelectedContainer>
                )}
              </S.SectionMain>
            ))}
        </S.SectionMainContainer>
      </S.Section>
    </>
  );
}
