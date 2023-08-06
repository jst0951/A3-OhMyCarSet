import { TrimInfoWithTextProps } from '@/components/main/TrimDescription/TrimDescription';
import * as Style from './TrimInfoWithText.style';

export default function TrimInfoWithText({ descriptionData }: TrimInfoWithTextProps) {
  return (
    <>
      <Style.TrimInfoWithTextContainer>
        {descriptionData.map((data, idx) => (
          <Style.TrimInfo key={idx}>
            <Style.TrimInfoIndex>{idx + 1}</Style.TrimInfoIndex>
            <Style.TrimInfoTextContainer>
              <Style.InfoMainText>{data.main}</Style.InfoMainText>
              <Style.InfoSubText>{data.sub}</Style.InfoSubText>
            </Style.TrimInfoTextContainer>
          </Style.TrimInfo>
        ))}
      </Style.TrimInfoWithTextContainer>
    </>
  );
}
