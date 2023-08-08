import Icon from '@/components/common/Icon';
import * as Style from './OptionItem.style';
import { useEffect, useState } from 'react';
import OptionShowMore from '../OptionShowMore/OptionShowMore';

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

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  useEffect(() => {
    if (!isActive) {
      setShowMore(false);
    }
  }, [isActive]);

  return (
    <>
      <Style.OptionItemContainer $isActive={isActive} $showMore={showMore} onClick={onClick}>
        <Icon icon={isActive ? 'CheckIcon' : 'UncheckIcon'} />
        <Style.SalePercent $isActive={isActive}>구매자의 63%가 선택했어요!</Style.SalePercent>
        <Style.OptionName $isActive={isActive}>{optionData.name}</Style.OptionName>
        <OptionShowMore main={optionData.mainDescription} sub={optionData.subDescription} />
        <Style.OptionBottomContainer $isActive={isActive}>
          <Style.OptionPrice>{`+ ${optionData.price.toLocaleString()}원`}</Style.OptionPrice>
          <Style.ShowMoreButton $isActive={isActive} $showMore={showMore} onClick={toggleShowMore}>
            {showMore ? '접기' : '자세히 보기'}
            <Icon icon="OptionShowMoreIcon" size={14} />
          </Style.ShowMoreButton>
        </Style.OptionBottomContainer>
      </Style.OptionItemContainer>
    </>
  );
}
