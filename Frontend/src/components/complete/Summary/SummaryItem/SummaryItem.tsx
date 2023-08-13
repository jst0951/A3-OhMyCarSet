import { SectionProps } from '../Summary';
import * as S from './SummaryItem.style';

interface EstimateSectionProps {
  data: SectionProps;
}

export default function SummaryItem({ data }: EstimateSectionProps) {
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
