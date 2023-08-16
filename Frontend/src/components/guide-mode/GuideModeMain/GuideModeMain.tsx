import GuideMainTag from '@/components/guide-mode/GuideMainTag/GuideMainTag';
import GuideMainComplete from '../GuideMainComplete/GuideMainComplete';
import { useState } from 'react';

export default function GuideMain() {
  const [complete, setComplete] = useState<boolean>(false);

  return <>{complete ? <GuideMainComplete /> : <GuideMainTag setComplete={setComplete} />}</>;
}
