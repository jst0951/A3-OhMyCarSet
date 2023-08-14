import GuideModeMainTag from '@/components/guide-mode/GuideModeMainTag/GuideModeMainTag';
import GuideModeMainComplete from '../GuideModeMainComplete/GuideModeMainComplete';
import { useState } from 'react';

export default function GuideModeMain() {
  const [complete, setComplete] = useState<boolean>(false);
  return <>{complete ? <GuideModeMainComplete /> : <GuideModeMainTag setComplete={setComplete} />}</>;
}
