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
  }, [selfModeStep, showFeedback]);

  return (
    <>
      <S.ItemContainer $isActive={isActive} onClick={onClick}>
        <Icon icon={isActive ? 'CheckIcon' : 'UncheckIcon'} />
        <S.SalePercent $isActive={isActive}>구매자의 63%가 선택했어요!</S.SalePercent>
        <S.OptionName $isActive={isActive}>{optionData.name}</S.OptionName>
        <OptionImage />
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
          {checkShowMore() && (
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
