import { TrimInfoWithTextProps } from '@/components/main/TrimDescription/TrimDescription';
import * as Style from './TrimInfoWithImage.style';

export default function TrimInfoWithImage({ descriptionData }: TrimInfoWithTextProps) {
  return (
    <>
      <Style.TrimInfoWithImageContainer>
        <Style.TrimInfoTitle>핵심 옵션</Style.TrimInfoTitle>
        <Style.TrimInfoContainer>
          {descriptionData.map((data, idx) => (
            <Style.TrimCoreOption key={idx}>
              <Style.TrimOptionImage src={data.sub} />
              <Style.TrimOptionText>
                {data.main}
                <Style.TrimOptionBorder />
              </Style.TrimOptionText>
            </Style.TrimCoreOption>
          ))}
        </Style.TrimInfoContainer>
      </Style.TrimInfoWithImageContainer>
    </>
  );
}
