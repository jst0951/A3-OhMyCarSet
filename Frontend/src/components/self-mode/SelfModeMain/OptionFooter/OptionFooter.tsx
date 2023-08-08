import Icon from '@/components/common/Icon';
import * as Style from './OptionFooter.style';
import RectButton from '@/components/common/button/RectButton/RectButton.style';
import { useState } from 'react';
import Estimate from '../Estimate/Estimate';

const dummyPrice = 47270000;

export default function OptionFooter() {
  const [showEstimate, setShowEstimate] = useState<boolean>(false);

  const handleClickEstimate = () => {
    setShowEstimate((prev) => !prev);
  };

  return (
    <>
      <Style.OptionFooterContainer>
        <Style.OptionFooterWrapper>
          <Style.FooterDimmed />
          <Style.TotalPriceContainer>
            <Style.TotalPriceButton onClick={handleClickEstimate} $show={showEstimate}>
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
        </Style.OptionFooterWrapper>
        <Estimate show={showEstimate} />
      </Style.OptionFooterContainer>
    </>
  );
}
