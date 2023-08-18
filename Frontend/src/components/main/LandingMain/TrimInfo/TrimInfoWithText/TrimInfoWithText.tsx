import { TrimInfoWithTextProps } from '@/components/main/TrimDescription/TrimDescription';
import * as S from './TrimInfoWithText.style';

export default function TrimInfoWithText({ descriptionData }: TrimInfoWithTextProps) {
  return (
    <>
      <S.TrimInfoWithTextContainer>
        {descriptionData.map((data, idx) => (
          <S.TrimInfo key={idx}>
            <S.TrimInfoIndex>{idx + 1}</S.TrimInfoIndex>
            <S.TrimInfoTextContainer>
              <S.InfoMainText>{data.main}</S.InfoMainText>
              <S.InfoSubText>{data.sub}</S.InfoSubText>
            </S.TrimInfoTextContainer>
          </S.TrimInfo>
        ))}
      </S.TrimInfoWithTextContainer>
    </>
  );
}
