import Icon from '@/components/common/Icon';
import * as Style from './OptionItem.style';
import { useCallback, useEffect, useRef, useState } from 'react';
import { OptionData } from '../SelfModeMain/SelfModeMain';
import { useSelfModeContext } from '@/contexts/SelfModeProvider';

export interface OptionDataProps {
  optionData: OptionData;
  isActive: boolean;
  onClick: () => void;
}

export default function OptionItem({ optionData, isActive, onClick }: OptionDataProps) {
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
  }, [selfModeStep]);

  return (
    <>
      <Style.ItemContainer $isActive={isActive} onClick={onClick}>
        <Icon icon={isActive ? 'CheckIcon' : 'UncheckIcon'} />
        <Style.SalePercent $isActive={isActive}>구매자의 63%가 선택했어요!</Style.SalePercent>
        <Style.OptionName $isActive={isActive}>{optionData.name}</Style.OptionName>
        {(optionData.mainDescription || optionData.subDescription) && (
          <Style.ShowMoreWrapper ref={contentBoxRef} $showMore={showMore}>
            <Style.ShowMoreContainer ref={contentRef}>
              {optionData.mainDescription && (
                <Style.ShowMoreMainText>{optionData.mainDescription}</Style.ShowMoreMainText>
              )}
              {optionData.subDescription && <Style.ShowMoreSubText>{optionData.subDescription}</Style.ShowMoreSubText>}
            </Style.ShowMoreContainer>
          </Style.ShowMoreWrapper>
        )}
        <Style.OptionBottomContainer $isActive={isActive}>
          <Style.OptionPrice>{`+ ${optionData.price.toLocaleString()}원`}</Style.OptionPrice>
          <Style.ShowMoreButton $isActive={isActive} $showMore={showMore} onClick={toggleShowMore}>
            {showMore ? '접기' : '자세히 보기'}
            <Icon icon="OptionShowMoreIcon" size={14} />
          </Style.ShowMoreButton>
        </Style.OptionBottomContainer>
      </Style.ItemContainer>
    </>
  );
}
