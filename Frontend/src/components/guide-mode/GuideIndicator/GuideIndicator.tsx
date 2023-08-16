import * as S from './GuideIndicator.style';
import guideDescriptionData from '@/asset/data/guideDescriptionData.json';
import { useGuideModeContext } from '@/contexts/GuideModeProvider';

export default function GuideIndicator() {
  const { GuideModeStep, setGuideModeStep } = useGuideModeContext();

  const handleClick = (page: number) => {
    if (GuideModeStep > page) {
      setGuideModeStep(page);
    }
  };

  return (
    <S.IndicatorContainer>
      {guideDescriptionData.map((data) => (
        <S.Indicator key={data.page} $selected={data.page === GuideModeStep} onClick={() => handleClick(data.page)}>
          {data.page}
        </S.Indicator>
      ))}
    </S.IndicatorContainer>
  );
}
