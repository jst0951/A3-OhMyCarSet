import Icon from '@/components/common/Icon';
import * as Style from './OptionFooter.style';
import RectButton from '@/components/common/button/RectButton/RectButton.style';
import { Dispatch, useEffect, useRef, useState } from 'react';
import Estimate from '../Estimate/Estimate';
import { useSelectOptionDispatch } from '@/contexts/SelectOptionProvider';
import { OptionData } from '../SelfModeMain';
import { useSelfModeContext } from '@/contexts/SelfModeProvider';
import CountingAnimation from '@/utils/CountingAnimation';

interface OptionFooterProps {
  selectedData: OptionData;
  prevTotal: number;
  tempTotal: number;
  setShowFeedback: Dispatch<React.SetStateAction<number>>;
}

export default function OptionFooter({ selectedData, prevTotal, tempTotal, setShowFeedback }: OptionFooterProps) {
  const { selfModeStep, setSelfModeStep } = useSelfModeContext();
  const buttonRef = useRef<HTMLInputElement>(null);
  const estimateRef = useRef<HTMLInputElement>(null);
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
    setShowFeedback(selectedData.id);
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
    setTimeout(() => {
      setShowFeedback(0);
      setSelfModeStep((prev) => prev + 1);
    }, 2000);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      estimateRef.current &&
      !estimateRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setShowEstimate(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <Style.OptionFooterContainer>
        <Style.OptionFooterWrapper>
          <Style.FooterDimmed />
          <Style.TotalPriceContainer>
            <Style.TotalPriceButton ref={buttonRef} onClick={handleClickEstimate} $show={showEstimate}>
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
        <Style.EstimateContainer ref={estimateRef} $show={showEstimate}>
          <Estimate onClick={handleClickEstimate} tempTotal={tempTotal} />
        </Style.EstimateContainer>
      </Style.OptionFooterContainer>
    </>
  );
}
