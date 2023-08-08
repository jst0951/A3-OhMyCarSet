import Icon from '@/components/common/Icon';
import * as Style from './OptionItem.style';
import { useCallback, useEffect, useRef, useState } from 'react';

type OptionData = {
  id: number;
  name: string;
  mainDescription: string;
  subDescription: string;
  mainFeedback: string;
  subFeedback: string;
  price: number;
  imgSrc: string;
  iconSrc?: string | null;
};

export interface OptionDataProps {
  optionData: OptionData;
  isActive: boolean;
  onClick: () => void;
}

export default function OptionItem({ optionData, isActive, onClick }: OptionDataProps) {
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

  useEffect(() => {
    if (!isActive) {
      setShowMore(false);

      if (contentBoxRef.current !== null && contentRef.current !== null) {
        if (contentBoxRef.current.clientHeight > 0) {
          contentBoxRef.current.style.height = '0';
        }
      }
    }
  }, [isActive]);

  return (
    <>
      <Style.ItemContainer $isActive={isActive} onClick={onClick}>
        <Icon icon={isActive ? 'CheckIcon' : 'UncheckIcon'} />
        <Style.SalePercent $isActive={isActive}>구매자의 63%가 선택했어요!</Style.SalePercent>
        <Style.OptionName $isActive={isActive}>{optionData.name}</Style.OptionName>
        <Style.ShowMoreWrapper ref={contentBoxRef} $showMore={showMore}>
          <Style.ShowMoreContainer ref={contentRef}>
            <Style.ShowMoreMainText>{optionData.mainDescription}</Style.ShowMoreMainText>
            <Style.ShowMoreSubText>{optionData.subDescription}</Style.ShowMoreSubText>
          </Style.ShowMoreContainer>
        </Style.ShowMoreWrapper>
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
