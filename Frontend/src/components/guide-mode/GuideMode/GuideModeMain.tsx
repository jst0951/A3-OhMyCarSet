import Loading from '@/components/loading/Loading';
import SelfModeMulti from '@/components/self-mode/SelfModeMain/SelfModeMulti/SelfModeMulti';
import SelfModeSingle from '@/components/self-mode/SelfModeMain/SelfModeSingle/SelfModeSingle';
import SelfModeNav from '@/components/self-mode/SelfModeNav/SelfModeNav';
import { useSelfModeContext } from '@/contexts/SelfModeProvider';

export default function GuideModeMain() {
  const { selfModeStep } = useSelfModeContext();

  return (
    <>
      <SelfModeNav />
      <div>{selfModeStep < 7 ? <SelfModeSingle /> : selfModeStep === 7 ? <SelfModeMulti /> : <Loading />}</div>
    </>
  );
}
