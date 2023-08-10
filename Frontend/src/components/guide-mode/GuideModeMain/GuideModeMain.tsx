import * as Style from './GuideModeMain.style';
import GuideModeIndicator from './GuideModeIndicator/GuideModeIndicator';
import GuideModeTag from './GuideModeTag/GuideModeTag';
import { useGuideModeContext } from '@/contexts/GuideModeProvider';
import guideDescriptionData from '@/asset/data/guideDescriptionData.json';

export default function GuideModeMain() {
  const { GuideModeStep } = useGuideModeContext();
  const currentStepDataIndex = GuideModeStep - 1;

  return (
    <>
      <Style.MainContainer>
        <Style.MainLeftContainer>
          <GuideModeIndicator />
          <Style.MainDescription>{guideDescriptionData[currentStepDataIndex].mainDescription}</Style.MainDescription>
          <Style.MainDescriptionBold>
            {guideDescriptionData[currentStepDataIndex].mainDescriptionBold}
          </Style.MainDescriptionBold>
          <Style.SubDescription>{guideDescriptionData[currentStepDataIndex].subDescription}</Style.SubDescription>
        </Style.MainLeftContainer>
        <Style.MainRightContainer>
          <GuideModeTag />
        </Style.MainRightContainer>
      </Style.MainContainer>
    </>
  );
}
