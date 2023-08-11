import * as S from './GuideModeMain.style';
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
      <S.MainContainer>
        <S.MainLeftContainer>
          <GuideModeIndicator />
          <S.MainDescription>{guideDescriptionData[currentIndex].mainDescription}</S.MainDescription>
          <S.MainDescriptionBold>{guideDescriptionData[currentIndex].mainDescriptionBold}</S.MainDescriptionBold>
          <S.SubDescription>{guideDescriptionData[currentIndex].subDescription}</S.SubDescription>

          <S.ButtonContainer $hidden={!complete}>
            <RectButton type="recommended" page="guide">
              선택 완료
            </RectButton>
          </S.ButtonContainer>
        </S.MainLeftContainer>

        <S.MainRightContainer>
          {currentIndex === 2 ? <GuideModeMultiTag setComplete={setComplete} /> : <GuideModeSingleTag />}
        </S.MainRightContainer>
      </S.MainContainer>
    </>
  );
}
