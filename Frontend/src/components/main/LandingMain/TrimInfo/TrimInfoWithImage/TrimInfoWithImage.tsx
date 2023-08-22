import { TrimInfoWithTextProps } from '@/components/main/TrimDescription/TrimDescription';
import * as S from './TrimInfoWithImage.style';

export default function TrimInfoWithImage({ descriptionData }: TrimInfoWithTextProps) {
  return (
    <>
      <S.TrimInfoWithImageContainer>
        <S.TrimInfoTitle>핵심 옵션</S.TrimInfoTitle>
        <S.TrimInfoContainer>
          {descriptionData.map((data, idx) => (
            <S.TrimCoreOption key={idx}>
              <S.TrimOptionImage src={data.sub} alt={data.main} />
              <S.TrimOptionText>
                {data.main}
                <S.TrimOptionBorder />
              </S.TrimOptionText>
            </S.TrimCoreOption>
          ))}
        </S.TrimInfoContainer>
      </S.TrimInfoWithImageContainer>
    </>
  );
}
