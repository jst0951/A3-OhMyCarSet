import * as Style from './TrimDescription.style';
import type { TrimCardProps } from '../TrimCard/TrimCard';
import TrimInfoWithText from '../LandingMain/TrimInfo/TrimInfoWithText/TrimInfoWithText';
import TrimInfoWithImage from '../LandingMain/TrimInfo/TrimInfoWithImage/TrimInfoWithImage';

type TrimDescriptionProps = Array<{
  main: string;
  sub: string;
}>;

export interface TrimInfoWithTextProps {
  descriptionData: TrimDescriptionProps;
}

type TrimInfoProps = {
  subTitle: string;
  subImage: boolean;
  descriptionData: TrimDescriptionProps;
};

interface TrimInformationProps {
  trimInfo: TrimInfoProps;
}

function TrimInformation({ trimInfo }: TrimInformationProps) {
  return (
    <>
      {trimInfo.subImage ? (
        <TrimInfoWithImage descriptionData={trimInfo.descriptionData} />
      ) : (
        <TrimInfoWithText descriptionData={trimInfo.descriptionData} />
      )}
    </>
  );
}

export default function TrimDescription({ trimData }: TrimCardProps) {
  const subTitle = trimData.descriptionCard?.subTitle || '';
  const { name, descriptionCard } = trimData;
  return (
    <>
      <Style.TrimDescriptionCard>
        <Style.TrimDescriptionBorder>
          <Style.TitleContainer>
            <Style.TrimSubTitle>{subTitle}</Style.TrimSubTitle>
            <Style.TrimTitle>{name}</Style.TrimTitle>
          </Style.TitleContainer>
          {descriptionCard && <TrimInformation trimInfo={descriptionCard} />}
        </Style.TrimDescriptionBorder>
      </Style.TrimDescriptionCard>
    </>
  );
}
