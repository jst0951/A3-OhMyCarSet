import GuideMainTag from '@/components/guide-mode/GuideIntro/GuideMainTag/GuideMainTag';
import GuideComplete from '../GuideComplete/GuideComplete';
import { useState } from 'react';
import GuideModeMain from '../GuideMode/GuideModeMain';
import Loading from '@/components/loading/Loading';
import { useLocation } from 'react-router-dom';

export type guideStepT = 'TAG_SELECT' | 'LOADING' | 'COMPLETE' | 'GUIDE_MODE_URL';

export default function GuideMain() {
  const { state } = useLocation();
  const [guideStep, setGuideStep] = useState<guideStepT>(
    state?.correction !== undefined ? 'GUIDE_MODE_URL' : 'TAG_SELECT'
  );

  const componentMap = {
    TAG_SELECT: <GuideMainTag setGuideStep={setGuideStep} />,
    LOADING: <Loading redirect="GUIDE_COMPLETE" setGuideStep={setGuideStep} />,
    COMPLETE: <GuideComplete setGuideStep={setGuideStep} />,
    GUIDE_MODE_URL: <GuideModeMain />,
  };

  return <>{componentMap[guideStep]}</>;
}
