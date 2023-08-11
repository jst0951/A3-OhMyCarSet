import Icon from '@/components/common/Icon';
import * as S from './FeedbackItem.style';
import { OptionData } from '../SelfModeMain/SelfModeMain';
import { useEffect, useState } from 'react';
import { useSelfModeContext } from '@/contexts/SelfModeProvider';

type FeedbackProps = {
  show: boolean;
  optionData: OptionData;
};

export default function FeedbackItem({ show, optionData }: FeedbackProps) {
  const { selfModeStep } = useSelfModeContext();
  const [showFirstIcon, setShowFirstIcon] = useState<boolean>(false);
  const [showSecondIcon, setShowSecondIcon] = useState<boolean>(false);

  useEffect(() => {
    if (show) {
      const timer1 = setTimeout(() => {
        setShowFirstIcon(true);
      }, 500);

      const timer2 = setTimeout(() => {
        setShowSecondIcon(true);
      }, 1000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [show]);

  useEffect(() => {
    setShowFirstIcon(false);
    setShowSecondIcon(false);
  }, [selfModeStep]);

  return (
    <>
      <S.FeedbackContainer $show={showFirstIcon}>
        <Icon icon="SmileBeforeIcon" size={30} />
        <S.NextIcon>
          <Icon icon="SmileAfterIcon" size={30} />
          <S.SecondIcon $show={showSecondIcon}>
            <Icon icon="FeedbackIcon" size={30} />
          </S.SecondIcon>
        </S.NextIcon>
        <S.Title>{optionData.mainFeedback}</S.Title>
        <S.Description>{optionData.subFeedback}</S.Description>
      </S.FeedbackContainer>
    </>
  );
}
