import { useSelfModeContext } from '@/contexts/SelfModeProvider';
import * as S from './OptionImage.style';

interface Props {
  icon: string;
  name: string;
}

export default function OptionImage({ icon, name }: Props) {
  const { selfModeStep } = useSelfModeContext();

  const iconSrc = `${import.meta.env.VITE_STATIC_API_URL}/${icon}`;
  const imageMap: Record<number, JSX.Element> = {
    4: <S.Exterior src={iconSrc} alt={name} />,
    5: <S.Interior src={iconSrc} alt={name} />,
    6: <S.Wheel src={iconSrc} alt={name} />,
    7: <S.Package src={iconSrc} alt={name} />,
  };

  return (
    <>
      <S.OptionImageContainer>{imageMap[selfModeStep]}</S.OptionImageContainer>
    </>
  );
}
