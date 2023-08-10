import Icon from '@/components/common/Icon';
import * as Style from './OptionFooter.style';
import RectButton from '@/components/common/button/RectButton/RectButton.style';
import { useState } from 'react';
import Estimate from '../Estimate/Estimate';
import { useSelectOptionDispatch, useSelectOptionState } from '@/contexts/SelectOptionProvider';
import { OptionData } from '../SelfModeMain';
import { useSelfModeContext } from '@/contexts/SelfModeProvider';
import CountingAnimation from '@/utils/CountingAnimation';

interface OptionFooterProps {
  selectedData: OptionData;
  prevTotal: number;
  tempTotal: number;
}

export default function OptionFooter({ selectedData, prevTotal, tempTotal }: OptionFooterProps) {
  const { selfModeStep, setSelfModeStep } = useSelfModeContext();
  const selectOptionState = useSelectOptionState();
  const [showEstimate, setShowEstimate] = useState<boolean>(false);

  const handleClickEstimate = () => {
    setShowEstimate((prev) => !prev);
  };

  const handleClickPrev = () => {
    if (selfModeStep !== 1) {
      setSelfModeStep((prev) => prev - 1);
    }
  };

  const selectOptionDispatch = useSelectOptionDispatch();

  const handleClickNext = (optionId: number, selectedData: OptionData) => {
    selectOptionDispatch({
      type: 'UPDATE_LIST',
      payload: {
        optionId,
        newOptionData: {
          selectedName: selectedData.name,
          price: selectedData.price,
          imgSrc: selectedData.imgSrc,
        },
      },
    });
    setSelfModeStep((prev) => prev + 1);
    console.log(selectOptionState);
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
            <Style.TotalPrice>
              <Style.Price>
                <CountingAnimation startValue={prevTotal} endValue={tempTotal} duration={1000} />
              </Style.Price>{' '}
              원
            </Style.TotalPrice>
          </Style.TotalPriceContainer>
          <Style.CompleteButtonContainer>
            <Style.PrevButton $disable={selfModeStep === 1} onClick={handleClickPrev}>
              이전
            </Style.PrevButton>
            <RectButton type="recommended" page="self" onClick={() => handleClickNext(selfModeStep, selectedData)}>
              선택완료
            </RectButton>
          </Style.CompleteButtonContainer>
        </Style.OptionFooterWrapper>
        <Estimate show={showEstimate} onClick={handleClickEstimate} />
      </Style.OptionFooterContainer>
    </>
  );
}
