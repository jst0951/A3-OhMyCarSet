import Icon from '@/components/common/Icon';
import * as Style from './OptionFooter.style';
import RectButton from '@/components/common/button/RectButton/RectButton.style';

const dummyPrice = 47270000;

export default function OptionFooter() {
  return (
    <>
      <Style.OptionFooterContainer>
        <Style.FooterDimmed></Style.FooterDimmed>
        <Style.TotalPriceContainer>
          <Style.TotalPriceButton>
            총 견적금액 <Icon icon="TotalPriceIcon" size={16} />
          </Style.TotalPriceButton>
          <Style.TotalPrice>{dummyPrice.toLocaleString()} 원</Style.TotalPrice>
        </Style.TotalPriceContainer>
        <Style.CompleteButtonContainer>
          <Style.PrevButton>이전</Style.PrevButton>
          <RectButton type="recommended" page="self">
            선택완료
          </RectButton>
        </Style.CompleteButtonContainer>
      </Style.OptionFooterContainer>
    </>
  );
}
