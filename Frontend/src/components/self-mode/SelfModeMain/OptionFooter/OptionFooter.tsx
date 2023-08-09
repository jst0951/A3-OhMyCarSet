import Icon from '@/components/common/Icon';
import * as Style from './OptionFooter.style';
import RectButton from '@/components/common/button/RectButton/RectButton.style';
import { useState } from 'react';
import Estimate from '../Estimate/Estimate';
import { useSelectOptionContext } from '@/contexts/SelectOptionProvider';
import { OptionData } from '../SelfModeMain';
import { useSelfModeContext } from '@/contexts/SelfModeProvider';
import { updateSelectList } from '@/utils/updateSelectList';
import { DEFAULT_PRICE } from '@/constants';

interface OptionFooterProps {
  selectedData: OptionData;
}

export default function OptionFooter({ selectedData }: OptionFooterProps) {
  const { selfModeStep, setSelfModeStep } = useSelfModeContext();
  const [showEstimate, setShowEstimate] = useState<boolean>(false);
  const { setSelectOptionList } = useSelectOptionContext();

  const handleClickEstimate = () => {
    setShowEstimate((prev) => !prev);
  };

  const handleClickPrev = () => {
    if (selfModeStep !== 1) {
      setSelfModeStep((prev) => prev - 1);
    }
  };

  const handleClickNext = () => {
    setSelectOptionList((prev) =>
      updateSelectList({
        prevData: prev,
        currentStep: selfModeStep,
        selectedData: selectedData,
      })
    );
    setSelfModeStep((prev) => prev + 1);
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
            <Style.TotalPrice>{DEFAULT_PRICE.toLocaleString()} 원</Style.TotalPrice>
          </Style.TotalPriceContainer>
          <Style.CompleteButtonContainer>
            <Style.PrevButton $disable={selfModeStep === 1} onClick={handleClickPrev}>
              이전
            </Style.PrevButton>
            <RectButton type="recommended" page="self" onClick={handleClickNext}>
              선택완료
            </RectButton>
          </Style.CompleteButtonContainer>
        </Style.OptionFooterWrapper>
        <Estimate show={showEstimate} onClick={handleClickEstimate} />
      </Style.OptionFooterContainer>
    </>
  );
}
