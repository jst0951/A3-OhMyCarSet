import * as S from './GuideMainTag.style';
import GuideIndicator from '@/components/guide-mode/GuideIntro/GuideIndicator/GuideIndicator';
import GuideSingleTag from '@/components/guide-mode/GuideIntro/GuideSingleTag/GuideSingleTag';
import guideDescriptionData from '@/asset/data/guideDescriptionData.json';
import GuideMultiTag from '@/components/guide-mode/GuideIntro/GuideMultiTag/GuideMultiTag';
import RectButton from '@/components/common/button/RectButton/RectButton';
import { Dispatch, useState } from 'react';
import { GUIDE_MAX_STEP } from '@/constants';

interface MainProps {
  setComplete: Dispatch<React.SetStateAction<boolean>>;
}

export default function GuideMainTag({ setComplete }: MainProps) {
  const [guideModeStep, setGuideModeStep] = useState(1);
  const [showButton, setShowButton] = useState<boolean>(false);

  const clickHandler = () => {
    setComplete(true);
  };

  return (
    <>
      <S.MainContainer>
        <S.MainLeftContainer>
          <GuideIndicator guideModeStep={guideModeStep} />
          <S.DescriptionContainer>
            {guideDescriptionData.map((data) => (
              <S.Description key={data.page} $hidden={data.page !== guideModeStep}>
                <S.MainDescription>{data.mainDescription}</S.MainDescription>
                <S.MainDescriptionBold>{data.mainDescriptionBold}</S.MainDescriptionBold>
                <S.SubDescription>{data.subDescription}</S.SubDescription>
              </S.Description>
            ))}
          </S.DescriptionContainer>
          <S.ButtonContainer $hidden={!showButton || guideModeStep !== GUIDE_MAX_STEP}>
            <RectButton type="recommended" page="guide" onClick={clickHandler}>
              선택 완료
            </RectButton>
          </S.ButtonContainer>
        </S.MainLeftContainer>

        <S.MainRightContainer>
          <GuideSingleTag step={1} show={guideModeStep === 1} setGuideModeStep={setGuideModeStep} />
          <GuideSingleTag step={2} show={guideModeStep === 2} setGuideModeStep={setGuideModeStep} />
          <GuideMultiTag setShowButton={setShowButton} show={guideModeStep === GUIDE_MAX_STEP} />
        </S.MainRightContainer>
      </S.MainContainer>
    </>
  );
}
