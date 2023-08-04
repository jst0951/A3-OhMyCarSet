import * as Style from './TrimDescription.style';
import type { TrimCardProps } from '../TrimCard/TrimCard';

type TrimInfoProps = {
  subTitle: string;
  subImage: boolean;
  descriptionData: Array<{
    main: string;
    sub: string;
  }>;
};

interface TrimInformationProps {
  trimInfo: TrimInfoProps;
}

// function TrimInfoWithText({ trimInfo }: TrimInformationProps) {
//   \
//   return <></>;
// }

function TrimInformation({ trimInfo }: TrimInformationProps) {
  const { descriptionData } = trimInfo;
  console.log(descriptionData);
  return <></>;
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
          <Style.TrimInformationContainer>
            {descriptionCard && <TrimInformation trimInfo={descriptionCard} />}
          </Style.TrimInformationContainer>
        </Style.TrimDescriptionBorder>
      </Style.TrimDescriptionCard>
    </>
  );
}
