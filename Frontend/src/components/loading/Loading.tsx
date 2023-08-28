import { Dispatch, useEffect } from 'react';
import * as S from './Loading.style';
import LoadingCircle from './LoadingCircle/LoadingCircle';
import LoadingStep from './LoadingStep/LoadingStep';
import { useNavigate } from 'react-router-dom';
import { useWaitingContext } from '@/contexts/WaitingProvider';
import { guideStepT } from '../guide-mode/GuideMain/GuideMain';
import { COMPLETE_URL } from '@/constants';

const DURATION = 3000;

interface Props {
  redirect: 'GUIDE_COMPLETE' | 'MAIN_COMPLETE';
  setGuideStep?: Dispatch<React.SetStateAction<guideStepT>>;
}

export default function Loading({ redirect, setGuideStep }: Props) {
  const navigate = useNavigate();
  const { setWaiting } = useWaitingContext();

  const loadingToGuideComplete = () => {
    if (setGuideStep === undefined) return;
    setWaiting(true);
    setTimeout(() => {
      setWaiting(false);
      setGuideStep('COMPLETE');
    }, DURATION);
  };

  const loadingToMainComplete = () => {
    setWaiting(true);
    setTimeout(() => {
      setWaiting(false);
      navigate(COMPLETE_URL);
    }, DURATION);
  };

  useEffect(() => {
    if (redirect === 'GUIDE_COMPLETE') loadingToGuideComplete();
    else loadingToMainComplete();
  }, []);

  return (
    <>
      <S.LoadingIndicator>
        <S.LoadingContainer>
          <LoadingCircle />
          <S.LoadingText>
            나만의 팰리세이드가
            <br />
            만들어지고 있어요!
          </S.LoadingText>
          <LoadingStep />
        </S.LoadingContainer>
      </S.LoadingIndicator>
    </>
  );
}
