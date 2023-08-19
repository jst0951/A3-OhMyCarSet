import * as S from './GuideIndicator.style';
import guideDescriptionData from '@/asset/data/guideDescriptionData.json';
import { useGuideModeContext } from '@/contexts/GuideModeProvider';
import { useEffect, useState } from 'react';

export default function GuideIndicator() {
  const { GuideModeStep, setGuideModeStep } = useGuideModeContext();
  const [prevId, setPrevId] = useState(1);
  const [nextId, setNextId] = useState(1);

  const handleClick = (page: number) => {
    if (GuideModeStep > page) {
      setGuideModeStep(page);
    }
  };

  useEffect(() => {
    setPrevId(GuideModeStep - 1);
    setNextId(GuideModeStep);
  }, [GuideModeStep]);

  return (
    <S.IndicatorContainer>
      {guideDescriptionData.map((data) => (
        <S.Indicator
          key={data.page}
          $id={data.page}
          $isPrev={prevId === data.page}
          $isNext={nextId === data.page}
          onClick={() => handleClick(data.page)}
        >
          {data.page}
        </S.Indicator>
      ))}
    </S.IndicatorContainer>
  );
}
