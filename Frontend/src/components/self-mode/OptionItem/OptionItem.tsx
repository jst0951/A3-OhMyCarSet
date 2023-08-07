import Icon from '@/components/common/Icon';
import * as Style from './OptionItem.style';

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
  return (
    <>
      <Style.OptionItemContainer $isActive={isActive} onClick={onClick}>
        <Icon icon={isActive ? 'CheckIcon' : 'UncheckIcon'} />
        <Style.SalePercent>구매자의 63%가 선택했어요!</Style.SalePercent>
        <Style.OptionName $isActive={isActive}>{optionData.name}</Style.OptionName>
        <Style.OptionBottomContainer>
          <Style.OptionPrice>{`+ ${optionData.price.toLocaleString()}원`}</Style.OptionPrice>
          <Style.ShowMoreButton>
            자세히 보기
            <Icon icon="OptionShowMoreIcon" size={14} />
          </Style.ShowMoreButton>
        </Style.OptionBottomContainer>
      </Style.OptionItemContainer>
    </>
  );
}
