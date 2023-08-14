import * as Style from './GuideModeIndicator.style';
import guideDescriptionData from '@/asset/data/guideDescriptionData.json';
import { useGuideModeContext } from '@/contexts/GuideModeProvider';

export default function GuideModeIndicator() {
  const { GuideModeStep, setGuideModeStep } = useGuideModeContext();

  const handleClick = (page: number) => {
    if (GuideModeStep > page) {
      setGuideModeStep(page);
    }
  };

  return (
    <Style.IndicatorContainer>
      {guideDescriptionData.map((data) => (
        <Style.Indicator key={data.page} $selected={data.page === GuideModeStep} onClick={() => handleClick(data.page)}>
          {data.page}
        </Style.Indicator>
      ))}
    </Style.IndicatorContainer>
  );
}
