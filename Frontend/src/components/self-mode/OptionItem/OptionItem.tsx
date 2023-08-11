import Icon from '@/components/common/Icon';
import * as S from './OptionItem.style';
import { useCallback, useEffect, useRef, useState } from 'react';
import { OptionData } from '../SelfModeMain/SelfModeMain';
import { useSelfModeContext } from '@/contexts/SelfModeProvider';
import FeedbackItem from '../FeedbackItem/FeedbackItem';
import OptionImage from './OptionImage/OptionImage';

export interface OptionDataProps {
  optionData: OptionData;
  isActive: boolean;
  onClick: () => void;
  showFeedback: number;
}

export default function OptionItem({ optionData, isActive, onClick, showFeedback }: OptionDataProps) {
  const { selfModeStep } = useSelfModeContext();
  const [showMore, setShowMore] = useState<boolean>(false);
  const contentBoxRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleShowMore = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      if (contentBoxRef.current === null || contentRef.current === null) {
        return;
      }

      if (contentBoxRef.current.clientHeight > 0) {
        contentBoxRef.current.style.height = '0';
      } else {
        contentBoxRef.current.style.height = `${contentRef.current.clientHeight}px`;
      }

      setShowMore((prev) => !prev);
    },
    [showMore]
  );

  const initContentBoxHeight = () => {
    if (contentBoxRef.current !== null && contentRef.current !== null) {
      if (contentBoxRef.current.clientHeight > 0) {
        contentBoxRef.current.style.height = '0';
      }
    }
  };

  useEffect(() => {
    if (!isActive) {
      setShowMore(false);
      initContentBoxHeight();
    }
  }, [isActive]);

  useEffect(() => {
    setShowMore(false);
    initContentBoxHeight();
  }, [selfModeStep, showFeedback]);

  return (
    <>
      <S.ItemContainer $isActive={isActive} onClick={onClick}>
        <Icon icon={isActive ? 'CheckIcon' : 'UncheckIcon'} />
        <S.SalePercent $isActive={isActive}>구매자의 63%가 선택했어요!</S.SalePercent>
        <S.OptionName $isActive={isActive}>{optionData.name}</S.OptionName>
        <OptionImage />
        {(optionData.mainDescription || optionData.subDescription) && (
          <S.ShowMoreWrapper ref={contentBoxRef} $showMore={showMore}>
            <S.ShowMoreContainer ref={contentRef}>
              {optionData.mainDescription && <S.ShowMoreMainText>{optionData.mainDescription}</S.ShowMoreMainText>}
              {optionData.subDescription && <S.ShowMoreSubText>{optionData.subDescription}</S.ShowMoreSubText>}
            </S.ShowMoreContainer>
          </S.ShowMoreWrapper>
        )}
        <S.OptionBottomContainer $isActive={isActive}>
          <S.OptionPrice>{`+ ${optionData.price.toLocaleString()}원`}</S.OptionPrice>
          {optionData.mainDescription && (
            <S.ShowMoreButton $isActive={isActive} $showMore={showMore} onClick={toggleShowMore}>
              {showMore ? '접기' : '자세히 보기'}
              <Icon icon="OptionShowMoreIcon" size={14} />
            </S.ShowMoreButton>
          )}
        </S.OptionBottomContainer>
        <S.FeedbackContainer $show={showFeedback === optionData.id}>
          <FeedbackItem show={showFeedback === optionData.id} optionData={optionData} />
        </S.FeedbackContainer>
      </S.ItemContainer>
    </>
  );
}
