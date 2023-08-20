import GuideMainTag from '@/components/guide-mode/GuideIntro/GuideMainTag/GuideMainTag';
import GuideComplete from '../GuideComplete/GuideComplete';
import { useState } from 'react';
import GuideModeMain from '../GuideMode/GuideModeMain';
import Loading from '@/components/loading/Loading';

export type guideStepT = 'TAG_SELECT' | 'LOADING' | 'COMPLETE' | 'GUIDE_MODE';

export default function GuideMain() {
  const [guideStep, setGuideStep] = useState<guideStepT>('TAG_SELECT');

  const componentMap = {
    TAG_SELECT: <GuideMainTag setGuideStep={setGuideStep} />,
    LOADING: <Loading redirect="GUIDE_COMPLETE" setGuideStep={setGuideStep} />,
    COMPLETE: <GuideComplete setGuideStep={setGuideStep} />,
    GUIDE_MODE: <GuideModeMain />,
  };

  return <>{componentMap[guideStep]}</>;
}
