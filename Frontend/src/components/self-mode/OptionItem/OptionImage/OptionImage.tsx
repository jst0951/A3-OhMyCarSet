import { useSelfModeContext } from '@/contexts/SelfModeProvider';
import * as S from './OptionImage.style';

interface Props {
  icon: string;
}

export default function OptionImage({ icon }: Props) {
  const { selfModeStep } = useSelfModeContext();

  const iconSrc = `${import.meta.env.VITE_STATIC_API_URL}/${icon}`;
  const imageMap: Record<number, JSX.Element> = {
    4: <S.Exterior $icon={iconSrc} />,
    5: <S.Interior $icon={iconSrc} />,
    6: <S.Wheel $icon={iconSrc} />,
  };

  return (
    <>
      <S.OptionImageContainer>{imageMap[selfModeStep]}</S.OptionImageContainer>
    </>
  );
}
