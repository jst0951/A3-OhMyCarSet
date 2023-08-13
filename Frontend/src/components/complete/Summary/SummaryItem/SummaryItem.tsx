import { SectionProps } from '../Summary';
import * as S from './SummaryItem.style';

interface SummaryProps {
  data: SectionProps;
}

export default function SummaryItem({ data }: SummaryProps) {
  return (
    <>
      <S.Section>
        <S.TitleContainer>
          <S.Title>{data.sectionTitle}</S.Title>
          <S.Price>+ {data.sectionTotal?.toLocaleString()}원</S.Price>
        </S.TitleContainer>
        <S.MainContainer>
          {data.subList &&
            data.subList.map((sub) => (
              <S.Main key={sub.stepName} $hidden={sub.selectName === null}>
                <S.CategoryName>{sub.stepName}</S.CategoryName>
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
