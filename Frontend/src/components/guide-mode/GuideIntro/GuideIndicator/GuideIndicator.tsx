import * as S from './GuideIndicator.style';
import guideDescriptionData from '@/asset/data/guideDescriptionData.json';

interface Props {
  guideModeStep: number;
  setGuideModeStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function GuideIndicator({ guideModeStep, setGuideModeStep }: Props) {
  const handleClick = (idx: number) => {
    setGuideModeStep(idx);
  };

  return (
    <S.IndicatorContainer>
      {guideDescriptionData.map((data) => (
        <S.Indicator key={data.page} $active={guideModeStep === data.page} onClick={() => handleClick(data.page)}>
          {data.page}
        </S.Indicator>
      ))}
    </S.IndicatorContainer>
  );
}
