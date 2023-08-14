import * as Style from './GuideMainTag.style';
import GuideModeIndicator from '@/components/guide-mode/GuideModeIndicator/GuideModeIndicator';
import GuideModeSingleTag from '@/components/guide-mode/GuideModeSingleTag/GuideModeSingleTag';
import { useGuideModeContext } from '@/contexts/GuideModeProvider';
import guideDescriptionData from '@/asset/data/guideDescriptionData.json';
import GuideModeMultiTag from '@/components/guide-mode/GuideModeMultiTag/GuideModeMultiTag';
import RectButton from '@/components/common/button/RectButton/RectButton';
import { Dispatch, useState } from 'react';
import { GUIDE_MAX_STEP } from '@/constants';

interface MainProps {
  setComplete: Dispatch<React.SetStateAction<boolean>>;
}

export default function GuideModeMainTag({ setComplete }: MainProps) {
  const { GuideModeStep } = useGuideModeContext();
  const currentIndex = GuideModeStep - 1;
  const [showButton, setShowButton] = useState<boolean>(false);

  const clickHandler = () => {
    setComplete(true);
  };

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

          <Style.ButtonContainer $hidden={!showButton || GuideModeStep !== GUIDE_MAX_STEP}>
            <RectButton type="recommended" page="guide" onClick={clickHandler}>
              선택 완료
            </RectButton>
          </Style.ButtonContainer>
        </Style.MainLeftContainer>

        <Style.MainRightContainer>
          {currentIndex === GUIDE_MAX_STEP - 1 ? (
            <GuideModeMultiTag setShowButton={setShowButton} />
          ) : (
            <GuideModeSingleTag />
          )}
        </Style.MainRightContainer>
      </Style.MainContainer>
    </>
  );
}
