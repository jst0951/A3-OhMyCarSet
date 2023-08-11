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
  const [showIcon, setShowIcon] = useState<boolean>(false);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShowIcon(true);
      }, 500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [show]);

  useEffect(() => {
    setShowIcon(false);
  }, [selfModeStep]);

  return (
    <>
      <S.FeedbackContainer $show={showIcon}>
        <Icon icon="SmileBeforeIcon" size={30} />
        <S.NextIcon>
          <Icon icon="SmileAfterIcon" size={30} />
          <S.SecondIcon $show={showIcon}>
            <Icon icon="FeedbackIcon" size={30} />
          </S.SecondIcon>
        </S.NextIcon>
        <S.Title>{optionData.mainFeedback}</S.Title>
        <S.Description>{optionData.subFeedback}</S.Description>
      </S.FeedbackContainer>
    </>
  );
}
