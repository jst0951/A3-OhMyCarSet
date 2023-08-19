import Icon from '@/components/common/Icon';
import * as S from './OptionItem.style';
import { useCallback, useEffect, useRef, useState } from 'react';
import { OptionDataT, OptionPackageT } from '../SelfModeMain/SelfModeMain';
import { useSelfModeContext } from '@/contexts/SelfModeProvider';
import FeedbackItem from '../FeedbackItem/FeedbackItem';
import OptionImage from './OptionImage/OptionImage';
import ShowMore from './ShowMore/ShowMore';
import ShowMoreMulti from './ShowMoreMulti/ShowMoreMulti';
import { useCurrentPackageState } from '@/contexts/CurrentPackageProvider';
import ShowMoreButton from './ShowMoreButton/ShowMoreButton';
import HighlightWord from '@/utils/HighlightWord';

export interface OptionDataProps {
  optionData: OptionDataT | OptionPackageT;
  isActive: boolean;
  onClick: () => void;
  showFeedback: number;
}

export default function OptionItem({ optionData, isActive, onClick, showFeedback }: OptionDataProps) {
  const { selfModeStep } = useSelfModeContext();
  const [showMore, setShowMore] = useState<boolean>(false);
  const contentBoxRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const optionRef = useRef<HTMLDivElement>(null);
  const { optionId } = useCurrentPackageState();

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

  useEffect(() => {
    if (contentBoxRef.current !== null && contentRef.current !== null) {
      if (showMore) {
        contentBoxRef.current.style.height = `${contentRef.current.clientHeight}px`;
      } else {
        contentBoxRef.current.style.height = '0';
      }
    }
  }, [optionId]);

  const initContentBoxHeight = () => {
    if (contentBoxRef.current !== null && contentRef.current !== null) {
      if (contentBoxRef.current.clientHeight > 0) {
        contentBoxRef.current.style.height = '0';
      }
    }
  };

  const initfeedbackBoxHeight = () => {
    if (optionRef.current !== null && feedbackRef.current !== null) {
      optionRef.current.style.height = `${feedbackRef.current.clientHeight + 4}px`;
    }
  };

  const checkShowMore = () => {
    if ('mainDescription' in optionData && optionData.mainDescription) return true;
    else if (
      'components' in optionData &&
      optionData.components &&
      (optionData.components[0].name !== null || optionData.components[0].description !== null)
    )
      return true;
    return false;
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

    if (showFeedback === optionData.id) {
      initfeedbackBoxHeight();
    } else if (showFeedback === 0) {
      if (optionRef.current !== null) {
        optionRef.current.style.height = '';
      }
    }
  }, [selfModeStep, showFeedback]);

  return (
    <>
      <S.ItemContainer $isActive={isActive} onClick={onClick} ref={optionRef}>
        <Icon icon={isActive ? 'CheckIcon' : 'UncheckIcon'} />
        <S.SalePercent $isActive={isActive}>구매자의 63%가 선택했어요!</S.SalePercent>
        <S.OptionName $isActive={isActive}>{HighlightWord({ children: optionData.name })}</S.OptionName>
        {optionData.iconSrc && <OptionImage icon={optionData.iconSrc} />}
        {checkShowMore() &&
          ('mainDescription' in optionData && optionData.mainDescription ? (
            <ShowMore
              contentBoxRef={contentBoxRef}
              contentRef={contentRef}
              description={{ main: optionData.mainDescription, sub: optionData.subDescription }}
              showMore={showMore}
            />
          ) : (
            'components' in optionData && (
              <ShowMoreMulti
                contentBoxRef={contentBoxRef}
                contentRef={contentRef}
                optionId={optionData.id}
                optionList={optionData.components}
                showMore={showMore}
              />
            )
          ))}
        <S.OptionBottomContainer $isActive={isActive}>
          <S.OptionPrice>{`+ ${optionData.price.toLocaleString()}원`}</S.OptionPrice>
          {checkShowMore() && <ShowMoreButton isActive={isActive} showMore={showMore} onClick={toggleShowMore} />}
        </S.OptionBottomContainer>
        {'mainFeedback' in optionData && (
          <S.FeedbackContainer $show={showFeedback === optionData.id}>
            <FeedbackItem show={showFeedback === optionData.id} optionData={optionData} feedbackRef={feedbackRef} />
          </S.FeedbackContainer>
        )}
      </S.ItemContainer>
    </>
  );
}
