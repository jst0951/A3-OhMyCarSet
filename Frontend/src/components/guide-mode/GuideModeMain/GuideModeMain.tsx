import * as Style from './GuideModeMain.style';
import GuideModeIndicator from './GuideModeIndicator/GuideModeIndicator';
import GuideModeSingleTag from './GuideModeSingleTag/GuideModeSingleTag';
import { useGuideModeContext } from '@/contexts/GuideModeProvider';
import guideDescriptionData from '@/asset/data/guideDescriptionData.json';
import GuideModeMultiTag from './GuideModeMultiTag/GuideModeMultiTag';

export default function GuideModeMain() {
  const { GuideModeStep } = useGuideModeContext();
  const currentIndex = GuideModeStep - 1;

  return (
    <>
      <Style.MainContainer>
        <Style.MainLeftContainer>
          <GuideModeIndicator />
          <Style.MainDescription>{guideDescriptionData[currentIndex].mainDescription}</Style.MainDescription>
          <Style.MainDescriptionBold>
            {guideDescriptionData[currentIndex].mainDescriptionBold}
          </Style.MainDescriptionBold>
          <Style.SubDescription>{guideDescriptionData[currentIndex].subDescription}</Style.SubDescription>
        </Style.MainLeftContainer>
        <Style.MainRightContainer>
          {currentIndex === 2 ? <GuideModeMultiTag /> : <GuideModeSingleTag />}
        </Style.MainRightContainer>
      </Style.MainContainer>
    </>
  );
}
