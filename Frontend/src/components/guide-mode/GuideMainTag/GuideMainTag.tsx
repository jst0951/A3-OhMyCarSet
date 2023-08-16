import * as S from './GuideMainTag.style';
import GuideIndicator from '@/components/guide-mode/GuideIndicator/GuideIndicator';
import GuideSingleTag from '@/components/guide-mode/GuideSingleTag/GuideSingleTag';
import { useGuideModeContext } from '@/contexts/GuideModeProvider';
import guideDescriptionData from '@/asset/data/guideDescriptionData.json';
import GuideMultiTag from '@/components/guide-mode/GuideMultiTag/GuideMultiTag';
import RectButton from '@/components/common/button/RectButton/RectButton';
import { Dispatch, useState } from 'react';
import { GUIDE_MAX_STEP } from '@/constants';

interface MainProps {
  setComplete: Dispatch<React.SetStateAction<boolean>>;
}

export default function GuideMainTag({ setComplete }: MainProps) {
  const { GuideModeStep } = useGuideModeContext();
  const currentIndex = GuideModeStep - 1;
  const [showButton, setShowButton] = useState<boolean>(false);

  const clickHandler = () => {
    setComplete(true);
  };

  return (
    <>
      <S.MainContainer>
        <S.MainLeftContainer>
          <GuideIndicator />
          <S.DescriptionContainer>
            {guideDescriptionData.map((data) => (
              <S.Description key={data.page} $hidden={data.page !== GuideModeStep}>
                <S.MainDescription>{data.mainDescription}</S.MainDescription>
                <S.MainDescriptionBold>{data.mainDescriptionBold}</S.MainDescriptionBold>
                <S.SubDescription>{data.subDescription}</S.SubDescription>
              </S.Description>
            ))}
          </S.DescriptionContainer>
          <S.ButtonContainer $hidden={!showButton || GuideModeStep !== GUIDE_MAX_STEP}>
            <RectButton type="recommended" page="guide" onClick={clickHandler}>
              선택 완료
            </RectButton>
          </S.ButtonContainer>
        </S.MainLeftContainer>

        <S.MainRightContainer>
          {currentIndex === GUIDE_MAX_STEP - 1 ? <GuideMultiTag setShowButton={setShowButton} /> : <GuideSingleTag />}
        </S.MainRightContainer>
      </S.MainContainer>
    </>
  );
}
