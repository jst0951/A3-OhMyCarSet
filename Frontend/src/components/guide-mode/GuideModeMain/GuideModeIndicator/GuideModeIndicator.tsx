import * as Style from './GuideModeIndicator.style';
import guideDescriptionData from '@/asset/data/guideDescriptionData.json';
import { useGuideModeContext } from '@/contexts/GuideModeProvider';

export default function GuideModeIndicator() {
  const { GuideModeStep, setGuideModeStep } = useGuideModeContext();
  const handleClick = (page: number) => {
    setGuideModeStep(page);
  };

  return (
    <Style.GuideModeIndicatorContainer>
      {guideDescriptionData.map((data) => (
        <Style.GuideModeIndicator
          key={data.page}
          $selected={data.page === GuideModeStep}
          onClick={() => handleClick(data.page)}
        >
          {data.page}
        </Style.GuideModeIndicator>
      ))}
    </Style.GuideModeIndicatorContainer>
  );
}
