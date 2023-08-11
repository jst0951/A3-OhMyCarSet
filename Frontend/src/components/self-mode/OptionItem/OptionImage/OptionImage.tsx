import { useSelfModeContext } from '@/contexts/SelfModeProvider';
import * as S from './OptionImage.style';

export default function OptionImage() {
  const { selfModeStep } = useSelfModeContext();
  // 5, 6 데이터 받아온 후 수정
  const imageMap: Record<number, JSX.Element> = { 4: <S.Exterior />, 5: <S.Interior /> };

  return (
    <>
      <S.OptionImageContainer>{imageMap[selfModeStep]}</S.OptionImageContainer>
    </>
  );
}
