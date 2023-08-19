import GuideMainTag from '@/components/guide-mode/GuideIntro/GuideMainTag/GuideMainTag';
import GuideComplete from '../GuideComplete/GuideComplete';
import { useState } from 'react';
import GuideModeMain from '../GuideMode/GuideModeMain';

export type guideStepT = 'TAG_SELECT' | 'COMPLETE' | 'GUIDE_MODE';

export default function GuideMain() {
  const [guideStep, setGuideStep] = useState<guideStepT>('TAG_SELECT');

  const componentMap = {
    TAG_SELECT: <GuideMainTag setGuideStep={setGuideStep} />,
    COMPLETE: <GuideComplete setGuideStep={setGuideStep} />,
    GUIDE_MODE: <GuideModeMain />,
  };

  return <>{componentMap[guideStep]}</>;
}
