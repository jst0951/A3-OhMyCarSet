import * as S from './GuideIndicator.style';
import guideDescriptionData from '@/asset/data/guideDescriptionData.json';
import { useEffect, useState } from 'react';

interface Props {
  guideModeStep: number;
}

export default function GuideIndicator({ guideModeStep }: Props) {
  const [prevId, setPrevId] = useState(1);
  const [nextId, setNextId] = useState(1);

  useEffect(() => {
    setPrevId(guideModeStep - 1);
    setNextId(guideModeStep);
  }, [guideModeStep]);

  return (
    <S.IndicatorContainer>
      {guideDescriptionData.map((data) => (
        <S.Indicator key={data.page} $id={data.page} $isPrev={prevId === data.page} $isNext={nextId === data.page}>
          {data.page}
        </S.Indicator>
      ))}
    </S.IndicatorContainer>
  );
}
