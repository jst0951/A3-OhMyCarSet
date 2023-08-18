import * as S from './SelfModeMain.style';
import { useSelfModeContext } from '@/contexts/SelfModeProvider';
import SelfModeSingle from './SelfModeSingle/SelfModeSingle';
import SelfModeMulti from './SelfModeMulti/SelfModeMulti';
import Loading from '@/components/loading/Loading';

export type OptionDataT = {
  id: number;
  name: string;
  mainDescription?: string;
  subDescription?: string;
  mainFeedback: string;
  subFeedback: string;
  price: number;
  imgSrc: string;
  iconSrc?: string | null;
};

export interface OptionPackageT {
  id: number;
  name: string;
  price: number;
  iconSrc: string | null;
  components: Array<{
    id: number;
    name: string | null;
    description: string;
    imgSrc: string;
  }>;
}

type SystemData = {
  description: string;
  id: number;
  imgSrc: string;
  name: string;
};

export type OptionSystemData = {
  id: number;
  name: string;
  price: number;
  components: SystemData[];
};

export default function SelfModeMain() {
  const { selfModeStep } = useSelfModeContext();

  return (
    <>
      <S.SelfModeMainContainer>
        {selfModeStep < 7 ? <SelfModeSingle /> : selfModeStep === 7 ? <SelfModeMulti /> : <Loading />}
      </S.SelfModeMainContainer>
    </>
  );
}
