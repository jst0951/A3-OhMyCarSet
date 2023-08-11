import * as Style from './GuideModeMain.style';
import GuideModeIndicator from './GuideModeIndicator/GuideModeIndicator';
import GuideModeSingleTag from './GuideModeSingleTag/GuideModeSingleTag';
import { useGuideModeContext } from '@/contexts/GuideModeProvider';
import guideDescriptionData from '@/asset/data/guideDescriptionData.json';
import GuideModeMultiTag from './GuideModeMultiTag/GuideModeMultiTag';
import RectButton from '@/components/common/button/RectButton/RectButton';
import { useState } from 'react';

export default function GuideModeMain() {
  const { GuideModeStep } = useGuideModeContext();
  const currentIndex = GuideModeStep - 1;
  const [complete, setComplete] = useState<boolean>(false);

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

          <Style.ButtonContainer $hidden={!complete}>
            <RectButton type="recommended" page="guide">
              선택 완료
            </RectButton>
          </Style.ButtonContainer>
        </Style.MainLeftContainer>

        <Style.MainRightContainer>
          {currentIndex === 2 ? <GuideModeMultiTag setComplete={setComplete} /> : <GuideModeSingleTag />}
        </Style.MainRightContainer>
      </Style.MainContainer>
    </>
  );
}
