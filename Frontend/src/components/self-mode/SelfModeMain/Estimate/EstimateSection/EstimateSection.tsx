import { SectionProps } from '../Estimate';
import * as S from './EstimateSection.style';

interface EstimateSectionProps {
  data: SectionProps; // data 프로퍼티 추가
}

export default function EstimateSection({ data }: EstimateSectionProps) {
  return (
    <>
      <S.Section>
        <S.SectionTitleContainer>
          <S.SectionTitle>{data.sectionTitle}</S.SectionTitle>
          <S.Price>+ {data.sectionTotal?.toLocaleString()}원</S.Price>
        </S.SectionTitleContainer>
        <S.SectionMainContainer>
          {data.subList &&
            data.subList.map((sub) => (
              <S.SectionMain key={sub.stepName} $hidden={sub.selectName === null}>
                <S.CategoryName>{sub.stepName}</S.CategoryName>
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
